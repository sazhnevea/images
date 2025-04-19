import fs from 'fs';
import csv from 'csv-parser';
import { CSVFileName, DATA_FOLDER_NAME, ROW_NAMES, FILES_FOLDER } from "../constants.js";
import { filterExistingPhotoNumbersOLD, getDirectionsList, getLayoutType, getNumberStrings, parseNumberArray, printMissingPhotoListMessage } from '../common/common.js';

let hasAnyInvalidSpread = false

async function main() {
  try {
    const csvStream = fs.createReadStream(`${DATA_FOLDER_NAME}/${CSVFileName}`).pipe(csv());
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
            const { existing, missing } = await filterExistingPhotoNumbersOLD(numberStrings, `${DATA_FOLDER_NAME}/${FILES_FOLDER}`)

            if (missing.length) {
              missing.forEach((missingPhoto) => missingPhotos.add(missingPhoto));
            }
            
            if (!existing.length) {
              continue
            }
            
            const directionList = (await getDirectionsList(`${DATA_FOLDER_NAME}/${FILES_FOLDER}`, existing)).map(({ direction }) => direction);
            const pageType = getLayoutType(directionList)
            if (!pageType) {
              hasAnyInvalidSpread = true
              console.log(`У студента ${studentName} неверно подобраны фотографии в столбце "${property}". Номера фотографий: ${existing}`)
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
   
    if (!hasAnyInvalidSpread) {
      console.log('Все молодцы! Фотографии подобраны правильно.')
    }
  } catch (error) {
    console.error('Error processing CSV data:', error);
    throw error;
  }
}

main();
