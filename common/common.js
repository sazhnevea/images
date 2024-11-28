import fs from 'fs';
import path from 'path';

import { DIRECTION, LAYOUT_TYPE_DIRECTION_MAPPING, ROW_NAMES } from "../constants.js";
import sharp from 'sharp';

export const filterExistingPhotoNumbers = async function (photoNumbers, directory) {
  const statuses = await Promise.all(
      photoNumbers.map(async (photoNumber) => {
          const filePath = path.join(directory, getImageName(photoNumber));
          try {
              await fs.promises.access(filePath, fs.constants.F_OK);
              return { photoNumber, exists: true };
          } catch {
              return { photoNumber, exists: false };
          }
      })
  );

  // Разделяем на существующие и пропущенные
  const existing = statuses.filter((status) => status.exists).map((status) => status.photoNumber);
  const missing = statuses.filter((status) => !status.exists).map((status) => status.photoNumber);

  return { existing, missing };
};



const cachedMetadata = {};

export const getDirectionsList = async (folderPath, numberStrings) => {
  const directionsList = []
  for (const photoNumber of numberStrings) {
    if (!cachedMetadata[photoNumber]) {
      const imagePath = `${folderPath}/${getImageName(photoNumber)}`;
      const { width, height } = await sharp(imagePath).metadata();
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

export const getImageName = (photoNumber) => `${photoNumber}.jpg`

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