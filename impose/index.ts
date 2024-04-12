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
    console.log('data.studentsData[0].pages[7]', data.studentsData[0].pages[7])
    await processPhotos({
      albumName: data.albumName,
      studentsData: [{
        name: data.studentsData[0].name,
        pages: [data.studentsData[0].pages[7]]  
      }],
    });
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main();
