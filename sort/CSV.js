import fs from 'fs';
import csv from 'csv-parser';
import sharp from 'sharp';
import { DATA_FOLDER_NAME, LAYOUT_TYPE, LAYOUT_TYPE_DIRECTION_MAPPING, ROW_NAMES, SOURCE_SORT_FOLDER_NAME } from "../constants.js";
import { getDirection, getImageName, getNumberStrings, parseNumberArray } from '../common/common.js';

const layoutTypeValues = Object.values(LAYOUT_TYPE)

const cachedMetadata = {};

const getDirectionsList = async (numberStrings) => {
  const directionsList = []
  for (const photoNumber of numberStrings) {
    if (!cachedMetadata[photoNumber]) {
      const imagePath = `${DATA_FOLDER_NAME}/${SOURCE_SORT_FOLDER_NAME}/${getImageName(photoNumber)}`;
      const { width, height } = await sharp(imagePath).metadata();
      cachedMetadata[photoNumber] = { width, height };
    }
    directionsList.push(({
      photoNumber: photoNumber,
      direction: getDirection(cachedMetadata[photoNumber].width, cachedMetadata[photoNumber].height)}));
  }
  return directionsList
};

const isMatchAnyLayout = (directionsList) => {
  const directions = directionsList.map(({ direction }) => direction);
  const directionValues = Object.values(LAYOUT_TYPE_DIRECTION_MAPPING);
  
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

export async function processCSVDataToSort(csvPath) {
  try {
    const csvStream = fs.createReadStream(csvPath).pipe(csv());
    const photoNumbers = new Set();

    for await (const studentData of csvStream) {
      const studentName = studentData[ROW_NAMES.studentName]
      if (studentName) {
        for (const layoutType of layoutTypeValues) {
          const cellValue = studentData[layoutType]
          if (cellValue && cellValue.length) { 
            const numberStrings = getNumberStrings(cellValue)
            const directionsList = await getDirectionsList(numberStrings)
            const matchingLayoutIndex = isMatchAnyLayout(directionsList)
            if  (matchingLayoutIndex < 0) {
                console.log(`У студента ${studentName} неверно подобранны фотографии!`)
            }

            if (numberStrings) {
              const photoNumbersList = [...parseNumberArray(numberStrings)]
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
    return Array.from(photoNumbers);
  } catch (error) {
    console.error('Error processing CSV data:', error);
    throw error;
  }
}
