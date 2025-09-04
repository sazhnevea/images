import fs from 'fs';
import sharp from 'sharp';
import path from 'path';
import {
  RESULT,
} from '../constants.js';
import { resizePhoto } from './resize.js';
import { getOffsets } from './offsets.js';
import { createStudentFolder, roundToNearestEven } from './helper.js';
import { getLeftOffsetBasedOnPagesAmount } from '../common/common.js';

export const processPhotos = async (data) => {
  for (const studentData of data.studentsData) {
    await processStudent(studentData);
  }
};

async function processStudent(student) {
  const { name, pages } = student;
  const studentFolderPath = path.join(RESULT, name);
  await createStudentFolder(studentFolderPath);

  await Promise.all(pages.map(async (page) => {
    const { layoutPath, pageName } = page;
    const destinationPath = `${studentFolderPath}/${pageName}.jpg`
    const layout = sharp(layoutPath).withMetadata();

    const { width: layoutWidth, height: layoutHeight } = await layout.metadata();
    const dataToComposite = await processPage(page, roundToNearestEven(layoutWidth), roundToNearestEven(layoutHeight));
    layout.composite(dataToComposite);
    await layout.toFile(destinationPath);
  }));
}

async function processPage(page, layoutWidth, layoutHeight) {

  const { decoration, photos, pagesAmount, step } = page;
  const dataToComposite = [];
  await Promise.all(photos.map(async (photo, order) => {
    try {
      const { path, sizeType } = photo;
      
      await fs.promises.access(path, fs.constants.F_OK);
      
      const currentPhoto = sharp(path);
      const {
        resizedPhoto,
        updatedWidth,
        updatedHeight
      } = await resizePhoto({
        photo: currentPhoto,
        sizeType,
        layoutWidth,
        layoutHeight,
        order
      });
      const { leftOffset, topOffset } = getOffsets({
        updatedWidth,
        updatedHeight,
        sizeType,
        layoutWidth,
        layoutHeight,
        order,
        pagesAmount,
        step
      });
      dataToComposite.push({ input: await resizedPhoto.toBuffer(), left: leftOffset, top: topOffset });
    } catch (err) {
      console.error('Ошибка обработки фотографии:', err);
    }
  }));

  if (decoration) {
      const { path, name, offsets} = decoration;
      const decorationImage = sharp(`${path}${name}`, );
      dataToComposite.push({ input: await decorationImage.toBuffer(), left: offsets.left + getLeftOffsetBasedOnPagesAmount(pagesAmount, step), top: offsets.top });
  }

  return dataToComposite;
}
