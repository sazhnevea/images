import {
  CSVFileName,
  DATA_FOLDER_NAME,
  RESULT,
} from '../constants.js';
import { createFolder } from '../common/common.js';
import { processCSVDataToSort } from './CSV.js';
import { copyPhotos } from './copyPhotos.js';

async function main() {
  try {
    createFolder(`${RESULT}`)
    const photosList = await processCSVDataToSort(`${DATA_FOLDER_NAME}/${CSVFileName}`);
    await copyPhotos(photosList);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main();
