import {
  CSVPath,
} from './constants.js';
import {
  processCSVData,
  createOutputFolder,
  processPhotos,
} from './helper.js';

import './core/offset.js';

async function main() {
  try {
    createOutputFolder()
    const data = await processCSVData(CSVPath);
    await processPhotos(data);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main();
