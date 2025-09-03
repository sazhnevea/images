/* eslint-env node */
import fs from 'fs';
import sharp from 'sharp';
import path from 'path';
import {
  RESULT,
} from '../constants.js';
import { resizePhoto } from './resize.js';
import { getOffsets } from './offsets.js';
import { createStudentFolder } from './helper.js';
import { getLeftOffsetBasedOnPagesAmount } from '../common/common.js';

// Настройки для оптимизации памяти
const MEMORY_OPTIMIZATION = {
  // Ограничиваем количество одновременных операций
  MAX_CONCURRENT_OPERATIONS: 2,
  // Принудительная сборка мусора каждые N операций
  GC_INTERVAL: 5,
  // Таймаут для операций (в миллисекундах)
  OPERATION_TIMEOUT: 30000
};

// Счетчик операций для сборки мусора
let operationCounter = 0;

// Функция для принудительной сборки мусора
function forceGarbageCollection() {
  // Проверяем доступность сборщика мусора
  if (typeof globalThis !== 'undefined' && globalThis.gc) {
    globalThis.gc();
  } else if (typeof global !== 'undefined' && global.gc) {
    global.gc();
  }
}

export const processPhotos = async (data) => {
  try {
    for (const studentData of data.studentsData) {
      await processStudent(studentData);
      // Принудительная сборка мусора после каждого студента
      forceGarbageCollection();
    }
  } catch (error) {
    console.error('Ошибка при обработке фотографий:', error);
    throw error;
  }
};

async function processStudent(student) {
  const { name, pages } = student;
  const studentFolderPath = path.join(RESULT, name);
  await createStudentFolder(studentFolderPath);

  // Обрабатываем страницы последовательно для экономии памяти
  for (let i = 0; i < pages.length; i += MEMORY_OPTIMIZATION.MAX_CONCURRENT_OPERATIONS) {
    const batch = pages.slice(i, i + MEMORY_OPTIMIZATION.MAX_CONCURRENT_OPERATIONS);
    
    await Promise.all(batch.map(async (page) => {
      try {
        await processPageWithTimeout(page, studentFolderPath);
        operationCounter++;
        
        // Принудительная сборка мусора каждые N операций
        if (operationCounter % MEMORY_OPTIMIZATION.GC_INTERVAL === 0) {
          forceGarbageCollection();
        }
      } catch (error) {
        console.error(`Ошибка обработки страницы ${page.pageName}:`, error);
        throw error;
      }
    }));
  }
}

async function processPageWithTimeout(page, studentFolderPath) {
  const { layoutPath, pageName } = page;
  const destinationPath = `${studentFolderPath}/${pageName}.jpg`;
  
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      reject(new Error(`Таймаут обработки страницы ${pageName}`));
    }, MEMORY_OPTIMIZATION.OPERATION_TIMEOUT);

    // Выполняем асинхронную операцию
    processPageAsync(page, layoutPath, destinationPath)
      .then(() => {
        clearTimeout(timeout);
        resolve();
      })
      .catch((error) => {
        clearTimeout(timeout);
        reject(error);
      });
  });
}

async function processPageAsync(page, layoutPath, destinationPath) {
  // Создаем Sharp инстанс с оптимизацией памяти
  const layout = sharp(layoutPath, {
    limitInputPixels: false,
    sequentialRead: true
  }).withMetadata();

  const { width: layoutWidth, height: layoutHeight } = await layout.metadata();
  const dataToComposite = await processPage(page, layoutWidth, layoutHeight);
  
  // Применяем композицию и сохраняем
  await layout.composite(dataToComposite).toFile(destinationPath);
  
  // Очищаем ресурсы
  layout.destroy();
}

async function processPage(page, layoutWidth, layoutHeight) {
  const { decoration, photos, pagesAmount, step } = page;
  const dataToComposite = [];
  
  // Обрабатываем фотографии последовательно для экономии памяти
  for (let i = 0; i < photos.length; i++) {
    const photo = photos[i];
    const order = i;
    
    try {
      const { path, sizeType } = photo;
      
      await fs.promises.access(path, fs.constants.F_OK);
      
      // Создаем Sharp инстанс с оптимизацией памяти
      const currentPhoto = sharp(path, {
        limitInputPixels: false,
        sequentialRead: true
      });
      
      const {
        resizedPhoto,
        updatedWidth,
        updatedHeight
      } = await resizePhoto({
        photo: currentPhoto,
        sizeType,
        layoutWidth,
        layoutHeight,
        order
      });
      
      const { leftOffset, topOffset } = getOffsets({
        updatedWidth,
        updatedHeight,
        sizeType,
        layoutWidth,
        layoutHeight,
        order,
        pagesAmount,
        step
      });
      
      // Получаем буфер только когда он нужен для композиции
      const photoBuffer = await resizedPhoto.toBuffer();
      dataToComposite.push({ 
        input: photoBuffer, 
        left: leftOffset, 
        top: topOffset 
      });
      
      // Очищаем ресурсы
      currentPhoto.destroy();
      resizedPhoto.destroy();
      
    } catch (err) {
      console.error('Ошибка обработки фотографии:', err);
      // Продолжаем обработку остальных фотографий
    }
  }

  // Обрабатываем декорацию если есть
  if (decoration) {
    try {
      const { path, name, offsets } = decoration;
      const decorationImage = sharp(`${path}${name}`, {
        limitInputPixels: false,
        sequentialRead: true
      });
      
      const decorationBuffer = await decorationImage.toBuffer();
      dataToComposite.push({ 
        input: decorationBuffer, 
        left: offsets.left + getLeftOffsetBasedOnPagesAmount(pagesAmount, step), 
        top: offsets.top 
      });
      
      // Очищаем ресурсы
      decorationImage.destroy();
    } catch (err) {
      console.error('Ошибка обработки декорации:', err);
    }
  }

  return dataToComposite;
}
