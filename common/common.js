import fs from 'fs';
import { ALBUM_NAME_FIELD } from "../constants.js";

export const createFolder = (folderName) => {
  fs.access(folderName, fs.constants.F_OK, (err) => {
    if (err) {
      fs.mkdir(folderName, (mkdirErr) => {
        if (mkdirErr) {
          console.log('Error creating output folder:', mkdirErr);
        } else {
          console.log(`${folderName} folder created successfully!`);
        }
      });
    } else {
      console.log(`${folderName} folder already exists!`);
    }
  });
};


export const getNumberStrings = (string) => string.match(/[-]{0,1}[\d]*[\\.]{0,1}[\d]+/g)


export const parseNumberArray = numberStrings => numberStrings.map(Number);

export const getKeyByValue = (object, value) => {
  return Object.keys(object).find(key => object[key] === value);
}

export const getImageName = (photoNumber) => `фото-${photoNumber}.jpg`

export const getAlbumName = (rowData) => {
  return rowData[ALBUM_NAME_FIELD]
}