import {
  CSVPathImpose, DATA_FOLDER_NAME, RESULT,
} from '../constants.js';

import '../core/offset.js';
import { createFolder } from '../common/common.js';
import { processCSVDataToImpose } from './CSV.js';
import { processPhotos } from './sharp.js';

async function main() {
  try {
    createFolder(RESULT);
    const startTime = Date.now(); // Record start time
    const data = await processCSVDataToImpose(`${DATA_FOLDER_NAME}/${CSVPathImpose}`);
    await processPhotos(data);
    const endTime = Date.now(); // Record end time
    const totalTimeInMilliseconds = endTime - startTime;
    const minutes = Math.floor(totalTimeInMilliseconds / (1000 * 60));
    const seconds = ((totalTimeInMilliseconds % (1000 * 60)) / 1000).toFixed(2);
    console.log('Total time taken:', minutes, 'minutes', seconds, 'seconds');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main();
