import { PathLike, createReadStream } from 'fs';
import csv from 'csv-parser';
import sharp from 'sharp';
import { DATA_FOLDER_NAME, LAYOUT_TYPE_SIZES_MAPPING, SOURCE_SORT_FOLDER_NAME } from "../constants.js";
import { getDirection, getImageName, getNumberStrings, parseNumberArray } from '../common/common.js';
import { LAYOUT_TYPE, PhotoSize } from '../impose/types.js';

const layoutTypeValues = Object.values(LAYOUT_TYPE)



const cachedMetadata: Record<number, PhotoSize> = {};

const getDirectionsList = async (photoNumbersList: number[]) => {
  const directionsList = []
  for (const photoNumber of photoNumbersList) {
    if (!cachedMetadata[photoNumber]) {
      const imagePath = `${DATA_FOLDER_NAME}/${SOURCE_SORT_FOLDER_NAME}/${getImageName(photoNumber)}`;
      const { width, height } = await sharp(imagePath).metadata();
      if (width && height) {
        cachedMetadata[photoNumber] = { width, height };
      }
    }
    directionsList.push(({
      photoNumber: photoNumber,
      direction: getDirection(cachedMetadata[photoNumber].width, cachedMetadata[photoNumber].height)}));
  }
  return directionsList
};

interface PhotoData {
  photoNumber: number;
  direction: string;
}

const isMatchAnyLayout = (directionsList: PhotoData[]) => {
  const directions = directionsList.map(({ direction }) => direction);
  const directionValues = Object.values(LAYOUT_TYPE_SIZES_MAPPING);
  
  for (let i = 0; i < directionValues.length; i++) {
    const value = directionValues[i];
    if (value.length === directions.length) {
      let matched = true;
      for (let j = 0; j < value.length; j++) {
        if (value[j] !== directions[j]) {
          matched = false;
          break;
        }
      }
      if (matched) {
        return i;
      }
    }
  }

  return -1;
};

export const processCSVDataToSort = async (csvPath: PathLike): Promise<number[]> => {
  try {
    const csvStream = createReadStream(csvPath).pipe(csv());
    const photoNumbers: Set<number> = new Set();

    for await (const studentData of csvStream) {
      const studentName = studentData['Имя участника']
      if (studentName) {
        for (const layoutType of layoutTypeValues) {
          const cellValue = studentData[layoutType]
          if (cellValue && cellValue.length) { 

            const photoNumbersList = getNumberStrings(cellValue)
            if (photoNumbersList) {
              const directionsList = await getDirectionsList(photoNumbersList)
              const matchingLayoutIndex = isMatchAnyLayout(directionsList)
              if  (matchingLayoutIndex < 0) {
                  console.log(`У студента ${studentName} неверно подобранны фотографии! Номера фотографий: ${photoNumbersList}`)
              }
              if (photoNumbersList) {
                photoNumbersList.forEach(number => {
                  photoNumbers.add(number);
                })
              } else {
                console.error(`У студента ${studentName} отсутствуют номера фотографий в развороте ${layoutType}`)
              }
            }
          }
        }
      }
    }
    return Array.from(photoNumbers);
  } catch (error) {
    console.error('Error processing CSV data:', error);
    throw error;
  }
}
