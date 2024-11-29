import fs from 'fs';
import csv from 'csv-parser';
import { DATA_FOLDER_NAME, ROW_NAMES, SOURCE_SORT_FOLDER_NAME } from "../constants.js";
import { filterExistingPhotoNumbers, getDirectionsList, getLayoutType, getNumberStrings, parseNumberArray, printMissingPhotoListMessage } from '../common/common.js';

export async function processCSVDataToSort(csvPath) {
  try {
    const csvStream = fs.createReadStream(csvPath).pipe(csv());
    const photoNumbers = new Set();
    const missingPhotos = new Set();
    for await (const studentData of csvStream) { 
      const studentName = studentData[ROW_NAMES.studentName]
      if (studentName) {
        for (const property in studentData) {
          const isPageColumn = property.includes(ROW_NAMES.page);
          if (isPageColumn && studentData[property]) {
          const cellValue = studentData[property]
          if (cellValue && cellValue.length) {
            const numberStrings = getNumberStrings(cellValue)
            if (!numberStrings.length) {
              continue
            }
            const { existing, missing } = await filterExistingPhotoNumbers(numberStrings, `${DATA_FOLDER_NAME}/${SOURCE_SORT_FOLDER_NAME}`)
            if (missing.length) {
              missing.forEach((missingPhoto) => missingPhotos.add(missingPhoto));
            }

            if (!existing.length) {
              continue
            }

            const directionList = (await getDirectionsList(`${DATA_FOLDER_NAME}/${SOURCE_SORT_FOLDER_NAME}`, existing)).map(({ direction }) => direction);
            const pageType = getLayoutType(directionList)
            if (!pageType) {
              console.log(`У студента ${studentName} неверно подобраны фотографии в столбце "${property}". Номера фотографий: ${existing}`)
              continue
            }
            const photoNumbersList = [...parseNumberArray(existing)]
            photoNumbersList.forEach(number => {
              photoNumbers.add(number);
            })
          }
          }
        }
      }
    }
    
    printMissingPhotoListMessage(missingPhotos)

    return Array.from(photoNumbers);
  } catch (error) {
    console.error('Error processing CSV data:', error);
    throw error;
  }
}
