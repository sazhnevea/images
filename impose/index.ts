import {
  CSVPathImpose, DATA_FOLDER_NAME, RESULT,
} from '../constants.js';

import '../core/offset.js';
import { createFolder } from '../common/common.js';
import { processCSVDataToImpose } from './CSV.js';
import { processPhotos } from './sharp.js';
import { Data } from './types.js';

async function main() {
  try {
    createFolder(RESULT)
    const data: Data = await processCSVDataToImpose(`${DATA_FOLDER_NAME}/${CSVPathImpose}`);
    console.log('data', data)
    console.log('data', data.studentsData[0].pages[2])
    await processPhotos(data);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main();
