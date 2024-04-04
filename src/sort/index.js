import {
  CSVPathSort,
  DATA_FOLDER_NAME,
  RESULT,
  RETOUCH_FOLDER_NAME,
} from '../constants.js';
import { createFolder } from '../common/common.js';
import { processCSVDataToSort } from './CSV.js';
import { copyPhotos } from './copyPhotos.js';

async function main() {
  try {
    createFolder(RESULT)
    createFolder(`${RESULT}/${RETOUCH_FOLDER_NAME}`)
    const photosList = await processCSVDataToSort(`${DATA_FOLDER_NAME}/${CSVPathSort}`);
    await copyPhotos(photosList);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main();
