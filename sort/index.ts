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
    const startTime = Date.now(); // Record start time
    await createFolder(RESULT)
    await createFolder(`${RESULT}/${RETOUCH_FOLDER_NAME}`)
    const photosList = await processCSVDataToSort(`${DATA_FOLDER_NAME}/${CSVPathSort}`);
    await copyPhotos(photosList);
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
