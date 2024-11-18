import {
  CSVPathToVignette,
  DATA_FOLDER_NAME,
  RESULT,
} from '../constants.js';

import '../core/offset.js';
import { createFolder } from '../common/common.js';
import { processCSVData } from './CSV.js';
import { processVignette } from './sharp.js';
import  { registerFont } from 'canvas'

registerFont('vignette/fonts/BadScript-Regular.ttf', { family: 'Bad Script' })

async function main() {
  try {
    createFolder(RESULT)
    const data = await processCSVData(`${DATA_FOLDER_NAME}/${CSVPathToVignette}`);
    console.log('data', data)
    await processVignette(data);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main();
