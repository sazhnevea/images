import { access, constants, mkdir } from 'fs/promises';
import { ALBUM_NAME_FIELD, DIRECTION } from "../constants.js";

export const createFolder = async (folderName: string) => {
  try {
    await access(folderName, constants.F_OK);
    console.log(`${folderName} folder already exists!`);
  } catch (error) {
    try {
      await mkdir(folderName);
      console.log(`${folderName} folder created successfully!`);
    } catch (mkdirErr) {
      console.log('Error creating output folder:', mkdirErr);
    }
  }
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