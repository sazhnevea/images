import fs from 'fs';
import sharp from 'sharp';
import path from 'path';
import {
  LAYOUT_TYPE,
  RESULT,
} from '../constants.js';
import { getSlots } from './grids.js';
import { createStudentFolder, roundToNearestEven, prepareDecoration } from './helper.js';

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
    const layout = sharp(layoutPath)

    const { width: layoutWidth, height: layoutHeight } = await layout.metadata();
    const dataToComposite = await processPage(page, roundToNearestEven(layoutWidth), roundToNearestEven(layoutHeight), name);
    layout.composite(dataToComposite);
    await layout.toFile(destinationPath);
  }));
}

async function processPage(page, layoutWidth, layoutHeight, studentName) {
  const {
    size,
    decoration,
    photos,
    coordinates,
    pageType,
  } = page;
  const isCover = pageType === LAYOUT_TYPE.COVER;
  const isFull = pageType === LAYOUT_TYPE.FULL;
  const slots = isCover || isFull ? [] : getSlots(pageType, layoutWidth, layoutHeight);

  const photoLayers = await Promise.all(photos.map(async (photo, order) => {
    try {
      const { path: photoPath } = photo;
      await fs.promises.access(photoPath, fs.constants.F_OK);
      const currentPhoto = sharp(photoPath)

      let photoWidth = 0
      let photoHeight = 0
      let leftOffset = 0
      let topOffset = 0
      let resizeOptions;

      if (isFull) {
        // FULL-фото кладётся вручную подготовленным на весь разворот.
        const { width, height } = await currentPhoto.metadata()
        photoWidth = width - 1;
        photoHeight = height - 1;
      } else if (isCover) {
        photoWidth = size.width;
        photoHeight = size.height;
        leftOffset = coordinates.left;
        topOffset = coordinates.top;
      } else {
        const slot = slots[order];
        if (!slot) {
          throw new Error(`Для фотографии №${order + 1} отсутствует слот в сетке ${pageType}`);
        }
        photoWidth = slot.width;
        photoHeight = slot.height;
        leftOffset = slot.left;
        topOffset = slot.top;
        // Вход и слот имеют одинаковое соотношение сторон, поэтому fill
        // масштабирует изображение без кадрирования.
        resizeOptions = { fit: 'fill' };
      }

      if (isFull) {
        if (photoWidth > layoutWidth || photoHeight > layoutHeight) {
          console.log('photoWidth > layoutWidth || photoHeight > layoutHeight', photoWidth > layoutWidth || photoHeight > layoutHeight)
          console.log(`Ошибка! У студента ${studentName} фотография ${photoPath} должна занимать разворот целиком, но ее размеры больше размера разворота. Разворот создан без фотографии!`)
          console.log('photoWidth', photoWidth)
          console.log('layoutWidth', layoutWidth)
          console.log('photoHeight', photoHeight)
          console.log('layoutHeight', layoutHeight)
          return null
        }
      }

      const resizedPhoto = currentPhoto.resize(photoWidth, photoHeight, resizeOptions).sharpen()
      return { input: await resizedPhoto.toBuffer(), left: leftOffset, top: topOffset };
    } catch (err) {
      console.error('Ошибка обработки фотографии:', err);
      return null;
    }
  }));

  const dataToComposite = photoLayers.filter(Boolean);
  const lastPhotoLayer = dataToComposite[dataToComposite.length - 1];

  const decorationLayer = await prepareDecoration(
    decoration,
    lastPhotoLayer?.left ?? 0,
    lastPhotoLayer?.top ?? 0,
    layoutWidth,
    layoutHeight
  );
  
  if (decorationLayer) {
    dataToComposite.push(decorationLayer);
  }

  return dataToComposite;
}
