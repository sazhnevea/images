import express from 'express';
import cors from 'cors';
import axios from 'axios';
import { WebSocketServer } from 'ws';
import fs from 'fs';
import path from 'path';

const YANDEX_DISK_API = 'https://cloud-api.yandex.net/v1/disk'

const app = express();
const port = 8888;

app.use(cors());
app.use(express.json());

// WebSocket сервер для передачи прогресса
const wss = new WebSocketServer({ port: 8889 });

wss.on('connection', (ws) => {
  console.log('WebSocket connection established');
  ws.on('message', (message) => {
    console.log('Received:', message);
  });
});

// Функция для отправки прогресса через WebSocket
function sendProgressToClient(progress) {
  wss.clients.forEach((client) => {
    if (client.readyState === client.OPEN) {
      client.send(JSON.stringify({ progress }));
    }
  });
}

// Маршрут для скачивания папки с Яндекс.Диска
app.post('/download', async (req, res) => {
  const { path: folderPath, token } = req.body; // Путь к папке и OAuth токен

  if (!folderPath || !token) {
    return res.status(400).json({ error: 'Path and token are required' });
  }

  const folderUrl = `${YANDEX_DISK_API}/resources?path=${encodeURIComponent(folderPath)}`;

  try {
    // Получаем список файлов в папке
    const { data: folderData } = await axios.get(folderUrl, {
      headers: {
        Authorization: `OAuth ${token}`,
      },
    });

    // Проверяем, что папка содержит файлы
    if (!folderData._embedded || !folderData._embedded.items) {
      return res.status(404).json({ error: 'No files found in the folder' });
    }

    const files = folderData._embedded.items.filter(item => item.type === 'file');
    if (files.length === 0) {
      return res.status(404).json({ error: 'No files in the folder to download' });
    }

    let totalLength = 0;
    files.forEach((file) => {
      totalLength += parseInt(file.size, 10);
    });

    let downloadedLength = 0;
    let completedDownloads = 0;

    // Скачиваем каждый файл
    for (const file of files) {
      const downloadUrl = await getFileDownloadUrl(file.path, token);

      // Скачиваем файл
      const response = await axios({
        url: downloadUrl,
        method: 'GET',
        responseType: 'stream',
      });

      const filePath = path.resolve('./downloads', file.name);
      const writer = fs.createWriteStream(filePath);

      response.data.on('data', (chunk) => {
        downloadedLength += chunk.length;
        const progress = Math.round((downloadedLength / totalLength) * 100);
        sendProgressToClient(progress); // Отправляем прогресс клиенту
      });

      response.data.pipe(writer);

      await new Promise((resolve, reject) => {
        writer.on('finish', () => {
          completedDownloads++;
          if (completedDownloads === files.length) {
            sendProgressToClient(100); // Финальный прогресс
            res.status(200).json({ message: 'All files downloaded successfully' });
          }
          resolve();
        });

        writer.on('error', (error) => {
          reject(error);
        });
      });
    }
  } catch (error) {
    console.error('Error downloading folder:', error);
    res.status(500).json({ error: 'Error downloading folder', details: error.message });
  }
});

// Получаем ссылку для скачивания файла с Яндекс.Диска
async function getFileDownloadUrl(filePath, token) {
  const url = `${YANDEX_DISK_API}/resources/download?path=${encodeURIComponent(filePath)}`;
  const response = await axios.get(url, {
    headers: {
      Authorization: `OAuth ${token}`,
    },
  });

  return response.data.href;
}

// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
