import fs from 'fs';
import path from 'path';
import { promises, constants } from 'fs';

import { DATA_FOLDER_NAME, DIRECTION, LAYOUT_TYPE_DIRECTION_MAPPING, ROW_NAMES, FILES_FOLDER } from "../constants.js";
import sharp from 'sharp';

export const filterExistingPhotoNumbersOLD = async function (photoNumbers, directory) {

  const statuses = await Promise.allSettled(
      photoNumbers.map(async (photoNumber) => {
          const filePath = path.join(directory, withJPG(photoNumber));
          try {
              await fs.promises.access(filePath, fs.constants.F_OK);
              return { photoNumber, exists: true }; // Файл существует
          } catch {
              return { photoNumber, exists: false }; // Файл не существует
          }
      })
  );

  // Обрабатываем результаты
  const existing = [];
  const missing = [];

  for (const result of statuses) {
      if (result.status === 'fulfilled') {
          const { photoNumber, exists } = result.value;
          if (exists) {
              existing.push(photoNumber);
          } else {
              missing.push(photoNumber);
          }
      }
  }

  return { existing, missing };
};


const fileExistsWithExtension = async (basePath, baseName) => {
  for (const ext of ALLOWED_EXTENSIONS) {
    const fullPath = path.join(basePath, baseName + ext);
    try {
      await fs.promises.access(fullPath, constants.F_OK);
      return true; // найден хоть один файл с допустимым расширением
    } catch {
      // продолжаем искать
    }
  }
  return false;
};

export const filterExistingPhotoNumbers = async function (photoNumbers, directory) {
  const existing = [];
  const missing = [];

  await Promise.all(
    photoNumbers.map(async (photoNumber) => {
      const baseName = photoNumber.toString();
      const exists = await fileExistsWithExtension(directory, baseName);
      if (exists) {
        existing.push(photoNumber);
      } else {
        missing.push(photoNumber);
      }
    })
  );

  return { existing, missing };
};

const getCorrectedDimensions = async (imagePath) => {
  const { width, height, orientation } = await sharp(imagePath).metadata();

  if ([5, 6, 7, 8].includes(orientation)) {
    // Ориентации, при которых изображение визуально повернуто
    return { width: height, height: width };
  }
  return { width, height };
};


const cachedMetadata = {};

export const getDirectionsList = async (folderPath, numberStrings) => {
  const directionsList = []
  for (const photoNumber of numberStrings) {
    if (!cachedMetadata[photoNumber]) {
      const imagePath = `${folderPath}/${withJPG(photoNumber)}`;
      const { width, height } = await getCorrectedDimensions(imagePath);
      cachedMetadata[photoNumber] = { width, height };
    }
    directionsList.push(({
      photoNumber: photoNumber,
      direction: getDirection(cachedMetadata[photoNumber].width, cachedMetadata[photoNumber].height)}));
  }
  return directionsList
};


export const getLayoutType = (directionList) => {
  const matchingLayoutType = Object.keys(LAYOUT_TYPE_DIRECTION_MAPPING).find((layoutType) => {
    const directionMapping = LAYOUT_TYPE_DIRECTION_MAPPING[layoutType];
    return isArraysEqual(directionMapping, directionList);
  });
  return matchingLayoutType || null;
}

export const createFolder = (folderName) => {
  fs.access(folderName, fs.constants.F_OK, (err) => {
    if (err) {
      fs.mkdir(folderName, { recursive: true }, (mkdirErr) => {
        if (mkdirErr) {
          console.log('Ошибка при создании папки:', mkdirErr);
        } else {
          console.log(`${folderName} папка успешно создана!`);
        }
      });
    } else {
      console.log(`${folderName} папка уже существует!`);
    }
  });
};


export const getNumberStrings = (string) => string.match(/\d+/g) || []

export const parseNumberArray = numberStrings => numberStrings.map(Number);

export const getKeyByValue = (object, value) => {
  return Object.keys(object).find(key => object[key] === value);
}

const ALLOWED_EXTENSIONS = [
  // JPEG/PNG (в нижнем и верхнем регистре)
  '.jpg', '.jpeg', '.png', '.webp',
  '.JPG', '.JPEG', '.PNG', '.WEBP',

  // RAW-форматы
  '.cr2', '.cr3', '.nef', '.arw', '.dng', '.raf', '.rw2', '.orf', '.sr2',

  // RAW-форматы в верхнем регистре
  '.CR2', '.CR3', '.NEF', '.ARW', '.DNG', '.RAF', '.RW2', '.ORF', '.SR2',
];

export const withJPG = (photoNumber) => `${photoNumber}.jpg`

export const getImageName = async (photoNumber) => {
  const baseName = photoNumber.toString();
  const folderPath = `${DATA_FOLDER_NAME}/${FILES_FOLDER}`;

for (const ext of ALLOWED_EXTENSIONS) {
  const fullPath = path.join(folderPath, baseName + ext);
    try {
      await promises.access(fullPath, constants.F_OK);
      return baseName + ext;
    } catch (err) {
      // файл не найден с этим расширением, идём дальше
    }
  }

  throw new Error(`Файл для ${photoNumber} не найден ни с одним из расширений.`);
};

export const getDirection = (width, height) => width > height ? DIRECTION.H : DIRECTION.V

export const getAlbumName = (rowData) => {
  return rowData[ROW_NAMES.albumName]
}

export const isArraysEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  return arr1.every((value, index) => value === arr2[index]);
}


export const getLeftOffsetBasedOnPagesAmount = (pagesAmount, step = 0) => {
  return (pagesAmount - 1) * step
}

export const printMissingPhotoListMessage = (missingPhotos) => {
  if (missingPhotos.size > 0) {
    console.log(`Следующие фотографии не найдены: ${Array.from(missingPhotos)}`)
  }
}