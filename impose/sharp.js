import fs from 'fs';
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

export const processPhotos = async (data) => {
  for (const studentData of data.studentsData) {
    await processStudent(studentData);
  }
};

async function processStudent(item) {
  const { name, pages } = item;
  const studentFolderPath = path.join(RESULT, IMPOSE_FOLDER_NAME, name);
  await createStudentFolder(studentFolderPath);

  await Promise.all(pages.map(async (page) => {
    const { layoutPath, pageName } = page;
    const destinationPath = `${studentFolderPath}/${pageName}.jpg`
    const layout = sharp(layoutPath);
    const { width: layoutWidth, height: layoutHeight } = await layout.metadata();
    const dataToComposite = await processPage(page, layoutWidth, layoutHeight);
    layout.composite(dataToComposite);
    await layout.toFile(destinationPath);
  }));
}

async function processPage(page, layoutWidth, layoutHeight) {
  const { decoration, photos, pagesAmount, step } = page;
  const dataToComposite = [];
  await Promise.all(photos.map(async (photo, photoOrder) => {
    try {
      const { path, sizeType } = photo;
      const imagePath = `${DATA_FOLDER_NAME}/${RETOUCH_FOLDER_NAME}/${path}`;
      
      await fs.promises.access(imagePath, fs.constants.F_OK);
      
      const currentPhoto = sharp(imagePath);
      const { resizedPhoto, updatedWidth, updatedHeight } = await resizePhoto(currentPhoto, sizeType, layoutWidth, layoutHeight, photoOrder);
      const { leftOffset, topOffset } = await getOffsets(updatedWidth, updatedHeight, sizeType, layoutWidth, layoutHeight, photoOrder, pagesAmount, step);
      dataToComposite.push({ input: await resizedPhoto.toBuffer(), left: leftOffset, top: topOffset });
    } catch (err) {
      console.error('Error processing photo:', err);
    }
  }));

  if (decoration) {
      const { path, name, step, offsets} = decoration;
      const decorationImage = sharp(`${path}${name}`, );

      dataToComposite.push({ input: await decorationImage.toBuffer(), left: offsets.left + calculateLeftOffsetBssedOnPagesAmount(pagesAmount, step), top: offsets.top });
  }

  return dataToComposite;
}

const calculateLeftOffsetBssedOnPagesAmount = (pagesAmount, step = 0) => {
return (pagesAmount - 1) * step
}