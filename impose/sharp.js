import fs from 'fs';
import sharp from 'sharp';
import path from 'path';
import {
  RESULT,
  SIZE_TYPES,
} from '../constants.js';
import { resizePhoto } from './resize.js';
import { getOffsets } from './offsets.js';
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
  const { size, decoration, photos, coordinates } = page;

  let photoCoordinateLeft = 0
  let photoCoordinateTop = 0

  const dataToComposite = [];
  await Promise.all(photos.map(async (photo, order) => {
    try {
      const { path, sizeType } = photo;
      await fs.promises.access(path, fs.constants.F_OK);
      const currentPhoto = sharp(path)

      let photoWidth = 0
      let photoHeight = 0

      if (SIZE_TYPES.FULL === sizeType) {
          // Для фотографий типа FULL мы не ресайзим фотографию автоматически,
          // т.к. ее нужно положить на разворот руками и выставить центр красиво
        const { width, height } = await currentPhoto.metadata()
        // допуск 1 пиксель
        photoWidth = width - 1;
        photoHeight = height - 1;
        
      } else {
        // sizе есть у обложек, куда вставляем потом декорацию
        if (size) {
          photoWidth = size.width
          photoHeight = size.height
        } else {
          const { updatedWidth, updatedHeight } = resizePhoto({
            sizeType,
            layoutWidth,
            layoutHeight,
            order,
          });
          photoWidth = updatedWidth
          photoHeight = updatedHeight 
        }
      }
      if (sizeType === SIZE_TYPES.FULL) {
        if (photoWidth > layoutWidth || photoHeight > layoutHeight) {
          console.log('photoWidth > layoutWidth || photoHeight > layoutHeight', photoWidth > layoutWidth || photoHeight > layoutHeight)
          console.log(`Ошибка! У студента ${studentName} фотография ${path} должна занимать разворот целиком, но ее размеры больше размера разворота. Разворот создан без фотографии!`)
          console.log('photoWidth', photoWidth)
          console.log('layoutWidth', layoutWidth)
          console.log('photoHeight', photoHeight)
          console.log('layoutHeight', layoutHeight)
          return
        }
      } 
      const resizedPhoto = currentPhoto.resize(photoWidth, photoHeight).sharpen()
   
      let leftOffset = 0
      let topOffset = 0

      if (coordinates) {
        leftOffset = coordinates.left
        topOffset = coordinates.top
      } else {
        const { left, top } = getOffsets({
          photoWidth,
          photoHeight,
          sizeType,
          layoutWidth,
          layoutHeight,
          order,
        });
        leftOffset = left
        topOffset = top
      }
      photoCoordinateLeft = leftOffset
      photoCoordinateTop = topOffset

      dataToComposite.push({ input: await resizedPhoto.toBuffer(), left: leftOffset, top: topOffset });
    } catch (err) {
      console.error('Ошибка обработки фотографии:', err);
    }
  }));

  const decorationLayer = await prepareDecoration(
    decoration,              // объект с path, name, offsets
    photoCoordinateLeft,     // смещение фото X
    photoCoordinateTop,      // смещение фото Y
    layoutWidth,
    layoutHeight
  );
  
  if (decorationLayer) {
    dataToComposite.push(decorationLayer);
  }

  return dataToComposite;
}
