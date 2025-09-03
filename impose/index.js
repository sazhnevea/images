import {
  CSVFileName,
  DATA_FOLDER_NAME,
  RESULT,
} from '../constants.js';

import '../core/offset.js';
import { createFolder } from '../common/common.js';
import { processCSVDataToImpose } from './CSV.js';
import { processPhotos } from './sharp.js';

/* global process, global */

// Функция для мониторинга памяти
function logMemoryUsage(stage) {
  const used = process.memoryUsage();
  const formatBytes = (bytes) => {
    return (bytes / 1024 / 1024).toFixed(2) + ' MB';
  };
  
  console.log(`\n=== Память ${stage} ===`);
  console.log(`RSS: ${formatBytes(used.rss)}`);
  console.log(`Heap Used: ${formatBytes(used.heapUsed)}`);
  console.log(`Heap Total: ${formatBytes(used.heapTotal)}`);
  console.log(`External: ${formatBytes(used.external)}`);
  console.log('==================\n');
}

async function main() {
  const startTime = Date.now();
  
  try {
    logMemoryUsage('в начале');
    
    createFolder(RESULT);
    
    logMemoryUsage('после создания папки');
    
    console.log('Начинаем обработку CSV...');
    const data = await processCSVDataToImpose(`${DATA_FOLDER_NAME}/${CSVFileName}`);
    
    logMemoryUsage('после обработки CSV');
    
    console.log('Начинаем обработку изображений...');
    await processPhotos(data);
    
    logMemoryUsage('после обработки изображений');
        
    const endTime = Date.now();
    const duration = (endTime - startTime) / 1000;
    console.log(`\n✅ Обработка завершена успешно за ${duration.toFixed(2)} секунд`);
    
  } catch (error) {
    console.error('❌ Произошла ошибка:', error);
    logMemoryUsage('при ошибке');
  }
}

process.on('uncaughtException', (error) => {
  console.error('❌ Необработанная ошибка:', error);
  logMemoryUsage('при критической ошибке');
  process.exit(1);
});

process.on('unhandledRejection', (reason) => {
  console.error('❌ Необработанное отклонение промиса:', reason);
  logMemoryUsage('при отклонении промиса');
});

main();
