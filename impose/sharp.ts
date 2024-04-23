import { promises, constants } from 'fs';
import sharp from 'sharp';
import path from 'path';
import {
  IMPOSE_FOLDER_NAME,
  RESULT,
} from '../constants.js';
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
    const destinationPath = `${studentFolderPath}/${pageName}.jpg`;
  
    const layout = sharp(layoutPath);
   
    const dataToComposite = await processPage(page);
    layout.composite(dataToComposite);
  
    await layout.toFile(destinationPath);
  }));
}

async function processPage(page: Page) {
  const { decoration, photos } = page;
  const dataToComposite = [];

  await Promise.all(photos.map(async (photo) => {
    try {
      const { path, sizeAndOffset } = photo;
      const { width, height, left, top } = sizeAndOffset;
      await promises.access(path, constants.F_OK);
      
      const currentPhoto = sharp(path);

      currentPhoto.resize(width, height).sharpen({ sigma: 1 })
      dataToComposite.push({ input: await currentPhoto.toBuffer(), left, top });

    } catch (err) {
      console.error('Error processing photo:', err);
    }
  }));

  if (decoration) {
      const { path, offsets } = decoration;
      const decorationImage = sharp(path);
      dataToComposite.push({ input: await decorationImage.toBuffer(), left: offsets.left, top: offsets.top });
  }

  return dataToComposite;
}
