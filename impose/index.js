import {
  CSVPathImpose, DATA_FOLDER_NAME, RESULT,
} from '../constants.js';

import '../core/offset.js';
import { createFolder } from '../common/common.js';
import { processCSVDataToImpose } from './CSV.js';
import { processPhotos } from './sharp.js';

async function main() {
  try {
    createFolder(RESULT)
    const data = await processCSVDataToImpose(`${DATA_FOLDER_NAME}/${CSVPathImpose}`);
    await processPhotos(data);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main();
