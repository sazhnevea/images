import { promises, constants } from 'fs';
import sharp from 'sharp';
import path from 'path';
import {
  IMPOSE_FOLDER_NAME,
  RETOUCH_FOLDER_NAME,
  RESULT,
  DATA_FOLDER_NAME,
} from '../constants.js';
import { resizePhoto } from './resize.js';
import { getOffsets } from './offsets.js';
import { createStudentFolder } from './helper.js';
import { Data, Page, Student } from './types.js';

export const processPhotos = async (data: Data) => {
  for (const studentData of data.studentsData) {
    await processStudent(studentData);
  }
};

async function processStudent(student: Student) {
  const { name, pages } = student;
  const studentFolderPath = path.join(RESULT, IMPOSE_FOLDER_NAME, name);
  await createStudentFolder(studentFolderPath);

  await Promise.all(pages.map(async (page) => {
    const { layoutPath, pageName } = page;
    const destinationPath = `${studentFolderPath}/${pageName}.jpg`
    const layout = sharp(layoutPath);
    const { width: layoutWidth, height: layoutHeight } = await layout.metadata();
    if (layoutWidth && layoutHeight) {
      const dataToComposite = await processPage(page, layoutWidth, layoutHeight);
      layout.composite(dataToComposite);
    } else {
      console.log(`layoutWidth or layoutHeight is not defined. layoutWidth value is ${layoutWidth}.layoutHeight value is ${layoutHeight}.`)
    }
    await layout.toFile(destinationPath);
  }));
}

async function processPage(page: Page, layoutWidth: number, layoutHeight: number) {
  const { decoration, photos, pagesAmount, step } = page;
  const dataToComposite = [];
  await Promise.all(photos.map(async (photo, photoOrderNumber) => {
    try {
      const { path, sizeType } = photo;
      const imagePath = `${DATA_FOLDER_NAME}/${RETOUCH_FOLDER_NAME}/${path}`;
      
      await promises.access(imagePath, constants.F_OK);
      
      const currentPhoto = sharp(imagePath);
      const { resizedPhoto, updatedWidth, updatedHeight } = await resizePhoto(currentPhoto, sizeType, layoutWidth, layoutHeight, photoOrderNumber);
      if (updatedWidth && updatedHeight && resizedPhoto) {
        const { leftOffset, topOffset } = await getOffsets(updatedWidth, updatedHeight, sizeType, layoutWidth, layoutHeight, photoOrderNumber, pagesAmount, step);
        dataToComposite.push({ input: await resizedPhoto.toBuffer(), left: leftOffset, top: topOffset });
      } else {
        console.log(`updatedWidth or updatedHeight or resizedPhoto is not defined! updatedWidth value is ${updatedWidth}.  updatedHeight value is ${updatedHeight}. resizedPhoto value is ${resizedPhoto}.`)
      }
    } catch (err) {
      console.error('Error processing photo:', err);
    }
  }));

  if (decoration) {
      const { path, name, offsets} = decoration;
      const decorationImage = sharp(`${path}${name}`);

      if (pagesAmount && step) {
        dataToComposite.push({ input: await decorationImage.toBuffer(), left: offsets.left + calculateLeftOffsetBssedOnPagesAmount(pagesAmount, step), top: offsets.top });
      } else {
        console.log(`pagesAmount or step is not defined! pagesAmount value is ${pagesAmount}. step value is ${step}.`)
      }
  }

  return dataToComposite;
}

const calculateLeftOffsetBssedOnPagesAmount = (pagesAmount: number, step: number) => {
  return (pagesAmount - 1) * step
}