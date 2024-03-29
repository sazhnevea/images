import fs from 'fs';
import csv from 'csv-parser';
import { LAYOUT_TYPE } from "../constants.js";
import { getNumberStrings, parseNumberArray } from '../common/common.js';

const layoutTypeValues = Object.values(LAYOUT_TYPE)

export async function processCSVDataToSort(csvPath) {
  try {
    const csvStream = fs.createReadStream(csvPath).pipe(csv());
    const photoNumbers = new Set();

    for await (const studentData of csvStream) {
      if (studentData['Имя участника']) {
        for (const layoutType of layoutTypeValues) {
          const cellValue = studentData[layoutType]
          if (cellValue && cellValue.length) { 

            const numberStrings = getNumberStrings(cellValue)
            if (numberStrings) {

              const photoNumbersList = [...parseNumberArray(numberStrings)]
              photoNumbersList.forEach(number => {
                photoNumbers.add(number);
              })
            } else {
              console.error(`У студента ${studentData['Имя участника']} отсутствуют номера фотографий в развороте ${layoutType}`)
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
