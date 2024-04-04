import {
  CSVPathImpose, DATA_FOLDER_NAME, RESULT,
} from '../constants.js';

import '../core/offset.js';
import { createFolder } from '../common/common.js';
import { processCSVDataToImpose } from './CSV.js';
import { processPhotos } from './sharp.js';
import { Student } from './types.js';

async function main() {
  try {
    createFolder(RESULT)
    const studentsData: Student[] = await processCSVDataToImpose(`${DATA_FOLDER_NAME}/${CSVPathImpose}`);
    // console.log('studentsData', studentsData)
    // await processPhotos(studentsData);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main();
