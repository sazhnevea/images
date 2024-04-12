import { access, constants, mkdir } from 'fs';
import { ALBUM_NAME_FIELD, DIRECTION } from "../constants.js";

export const createFolder = (folderName: string) => {
  access(folderName, constants.F_OK, (err) => {
    if (err) {
      mkdir(folderName, (mkdirErr) => {
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


export const getNumberStrings = (string: string) => string.match(/[-]{0,1}[\d]*[\\.]{0,1}[\d]+/g)?.map(Number)

export const parseNumberArray = (numberStrings: string[]) => numberStrings.map(Number);

export const getLayoutType = <T>(object: { [key: string]: T }, value: T): string | undefined => {
  return Object.keys(object).find(key => object[key] === value);
}

export const getImageName = (photoNumber: number) => `${photoNumber}.jpg`

export const getDirection = (width: number, height: number) => width > height ? DIRECTION.H : DIRECTION.V

export const getAlbumName = (rowData: { [key: string]: string }) => {
  return rowData[ALBUM_NAME_FIELD];
}

export const calculateLeftOffsetBasedOnPagesAmount = (pagesAmount: number, step: number) => {
  return (pagesAmount - 1) * step
}