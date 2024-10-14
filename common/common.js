import fs from 'fs';
import { DIRECTION, ROW_NAMES } from "../constants.js";

export const createFolder = (folderName) => {
  fs.access(folderName, fs.constants.F_OK, (err) => {
    if (err) {
      fs.mkdir(folderName, (mkdirErr) => {
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


export const getNumberStrings = (string) => string.match(/[-]{0,1}[\d]*[\\.]{0,1}[\d]+/g)

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