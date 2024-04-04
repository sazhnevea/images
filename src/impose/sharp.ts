import fs from 'fs';
import sharp, { OverlayOptions } from 'sharp';
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
import { Page, Student } from './types.js';

export const processPhotos = async (studentsData: Student[]) => {
  for (const studentData of studentsData) {
    await processStudent(studentData);
  }
};

async function processStudent(studentData: Student) {
  const { name, pages } = studentData;
  const studentFolderPath = path.join(RESULT, IMPOSE_FOLDER_NAME, name);
  await createStudentFolder(studentFolderPath);

  await Promise.all(pages.map(async (page) => {
    const { layoutPath, pageOutputFilename } = page;
    const destinationPath = `${studentFolderPath}/${pageOutputFilename}.jpg`
    const layout = sharp(layoutPath);
    const { width, height } = await layout.metadata();
    if (width && height) {
      const dataToComposite = await processPage(page, width, height);
      layout.composite(dataToComposite);
      await layout.toFile(destinationPath);
    }
  }));
}

async function processPage(page: Page, layoutWidth: number, layoutHeight: number) {
  const { decorations, photos, pagesAmount, step } = page;
  const dataToComposite: OverlayOptions[] = [];
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

  if (decorations) {
    decorations.forEach(async (decoration) => {
      const { path, name, step, offsets} = decoration

      const decorationImage = sharp(`${path}${name}`, );
      dataToComposite.push({ input: await decorationImage.toBuffer(), left: offsets.left + ((pagesAmount - 1) * step), top: offsets.top });
  })
  }

  return dataToComposite;
}
