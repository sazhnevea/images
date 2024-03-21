import fs from 'fs';
import sharp from 'sharp';
import path from 'path';
import csv from 'csv-parser';
import {
  OUTPUT_FOLDER_NAME,
  MAIN_FOLDER_NAME,
  SOURCE_FOLDER_NAME,
  SIZE_TYPES,
  PADDINGS,
  CUT_OFF,
  LAYOUT_TYPE,
  LAYOUT_TYPE_MAPPING,
  LAYOUT_NAME
} from './constants.js';
import { getKeyByValue, parseNumberArray } from './utils.js';

const parentFolderPath = path.join(MAIN_FOLDER_NAME, OUTPUT_FOLDER_NAME);

export const createOutputFolder = () => {
  fs.access(OUTPUT_FOLDER_NAME, fs.constants.F_OK, (err) => {
    if (err) {
      fs.mkdir(OUTPUT_FOLDER_NAME, (mkdirErr) => {
        if (mkdirErr) {
          console.log('Error creating output folder:', mkdirErr);
        } else {
          console.log('Output folder created successfully!');
        }
      });
    } else {
      console.log('Output folder already exists!');
    }
  });
};


const layoutTypeValues = Object.values(LAYOUT_TYPE)

export async function processCSVData(csvPath) {
  return new Promise((resolve, reject) => {
    const data = [];

    const readStream = fs.createReadStream(csvPath);

    readStream.pipe(csv())
      .on('data', (studentData) => {
        let dataToPush = {}

        if (studentData['Имя участника']) {
          dataToPush.name = studentData['Имя участника']
        
          let pageNumber = 1

          const pagesData = []
          for (const property in studentData) {

            if (layoutTypeValues.includes(property) && studentData[property]) {

              const layoutTypesOrder = LAYOUT_TYPE_MAPPING[getKeyByValue(LAYOUT_TYPE, property)]

              const photoNumbers = parseNumberArray(studentData[property])
              const photos = processPhotoNumbers(photoNumbers, layoutTypesOrder)
              const pageData = {
                layoutPath: LAYOUT_NAME,
                pageName: `${pageNumber}`,
                photos: photos
              }
              pagesData.push(pageData)
              pageNumber = pageNumber + 1
            }
            
          }
          dataToPush.pages = pagesData
          data.push(dataToPush)
        }
      })
      .on('end', () => {
        resolve(data);
      })
      .on('error', (error) => {
        reject(error);
      });
  });
}

const createStudentFolder = async (studentFolderPath) => {
  try {
    await fs.promises.mkdir(studentFolderPath, { recursive: true });
    console.log(`${studentFolderPath} folder created successfully!`);
  } catch (err) {
    console.error('Error creating student folder:', err);
  }
};

const resizePhoto = async (photo, sizeType, layoutWidth, layoutHeight, order) => {
  let resizedPhoto;
  let updatedWidth;
  let updatedHeight;

  const { xPadding, yPadding, innerPadding } = PADDINGS[sizeType]
  const doubleYPadding = yPadding * 2
  const doubleXPadding = xPadding * 2;

  switch (sizeType) {
    case SIZE_TYPES.HALF: {
      updatedWidth = layoutWidth.getHalf()
      updatedHeight = layoutHeight
      resizedPhoto = await photo.resize(updatedWidth, updatedHeight).sharpen()
      break;
    }
    case SIZE_TYPES.THREE_QUARTERS: {
      updatedWidth = Math.round((layoutWidth - (CUT_OFF * 2) - xPadding - innerPadding) * 0.80 + CUT_OFF)
      updatedHeight = layoutHeight.minusMargins() - doubleYPadding;
      resizedPhoto = await photo.resize(updatedWidth, updatedHeight).sharpen()
      break;
    }
    case SIZE_TYPES.HALF_CUTTED: {
      updatedWidth = layoutWidth.getHalf().minusMargins() - doubleXPadding;
      updatedHeight = layoutHeight.minusMargins() - doubleYPadding;
      resizedPhoto = await photo.resize(updatedWidth, updatedHeight).sharpen({ sigma: 1 });
      break;
    }
    
    case SIZE_TYPES.THREE_HORISONTAL_HALF: {
      updatedWidth = Math.round(layoutWidth.getHalf().minusMargins()) - (doubleXPadding);
      updatedHeight = Math.round((layoutHeight.minusMargins() - (doubleYPadding * 2)) / 3);
      resizedPhoto = await photo.resize(updatedWidth, updatedHeight).sharpen({ sigma: 1 })
      break;
    }
    case SIZE_TYPES.FOUR_HORISONTAL_FULL: {
      updatedWidth = Math.round(layoutWidth.getHalf().minusMargins()) - xPadding;
      updatedHeight = Math.round((layoutHeight.minusMargins() - (doubleYPadding) - innerPadding) / 2);
      resizedPhoto = await photo.resize(updatedWidth, updatedHeight).sharpen({ sigma: 1 })
      break;
    }
    case SIZE_TYPES.TWO_VERTICAL_ONE_HORISONTAL_HALF: {
      if (order === 1 || order === 2) {
        updatedWidth = Math.round((layoutWidth.getHalf().minusMargin() - doubleXPadding - innerPadding) / 2 );
        updatedHeight = Math.round((layoutHeight.minusMargins() - (doubleYPadding) - innerPadding) / 2);
        resizedPhoto = await photo.resize(updatedWidth, updatedHeight).sharpen({ sigma: 1 })
      }
      
      if (order === 3) {
        updatedWidth = Math.round(layoutWidth.getHalf().minusMargin()) - doubleXPadding ;
        updatedHeight = Math.round((layoutHeight.minusMargins() - (doubleYPadding) - innerPadding) / 2);
        resizedPhoto = await photo.resize(updatedWidth, updatedHeight).sharpen({ sigma: 1 });
      }
      break
    }
    case SIZE_TYPES.TWO_HORISONTAL_HALF: {
      updatedWidth = Math.round(layoutWidth.getHalf().minusMargin()) - doubleXPadding ;
      updatedHeight = Math.round((layoutHeight.minusMargins() - (doubleYPadding) - innerPadding) / 2);
      resizedPhoto = await photo.resize(updatedWidth, updatedHeight).sharpen({ sigma: 1 })
      break
    }
    case SIZE_TYPES.FOUR_VERTICAL_HALF: {
      updatedWidth = Math.round((layoutWidth.getHalf().minusMargin() - doubleXPadding - innerPadding) / 2 );
      updatedHeight = Math.round((layoutHeight.minusMargins() - (doubleYPadding) - innerPadding) / 2);
      resizedPhoto = await photo.resize(updatedWidth, updatedHeight).sharpen({ sigma: 1 })
      break
    }
    case SIZE_TYPES.TWO_VERTICAL_CUSTOM: {
      updatedWidth = Math.round((layoutWidth - (CUT_OFF * 2) - xPadding - innerPadding) * 0.20)
      updatedHeight = Math.round((layoutHeight.minusMargins() - (doubleYPadding) - innerPadding) / 2);
      resizedPhoto = await photo.resize(updatedWidth, updatedHeight).sharpen({ sigma: 1 })
      break
    }

    default:
      break;
  }

  return { resizedPhoto, updatedWidth, updatedHeight };
};

const getOffsets = async (updatedWidth, updatedHeight, sizeType, layoutWidth, layoutHeight, order) => {
  let leftOffset = 0;
  let topOffset = 0;

  const { xPadding, yPadding, innerPadding } = PADDINGS[sizeType]
  switch (sizeType) {
    case SIZE_TYPES.HALF: {
      leftOffset = 0;
      topOffset = 0;
      break;
    }
    case SIZE_TYPES.THREE_QUARTERS: {
      leftOffset = 0;
      topOffset = topOffset + CUT_OFF + yPadding
      break;
    }
    case SIZE_TYPES.HALF_CUTTED: {
      const leftSpace = layoutWidth.minusMargins().getHalf() - updatedWidth;
      leftOffset = layoutWidth.minusMargin() - updatedWidth - (leftSpace / 2);
      topOffset = topOffset.plusMargin() + yPadding;
      break;
    }
    
    case SIZE_TYPES.THREE_HORISONTAL_HALF: {
      const leftSpace = layoutWidth.minusMargins().getHalf() - updatedWidth
      leftOffset = layoutWidth.minusMargin() - updatedWidth - (leftSpace / 2);
      topOffset = Math.round(topOffset.plusMargin() + yPadding);
      if (order >= 2) {
        topOffset = Math.round(topOffset + updatedHeight + yPadding)
      }
      if (order >= 3) {
        topOffset = Math.round(topOffset + updatedHeight + yPadding)
      }
      break;
    }
    case SIZE_TYPES.FOUR_HORISONTAL_FULL: {
      if (order === 0) {
        leftOffset = layoutWidth.getHalf() - (innerPadding / 2) - updatedWidth;
        topOffset = Math.round(topOffset.plusMargin() + yPadding);
      }

      if (order === 1) {
        leftOffset = layoutWidth.getHalf() - (innerPadding / 2) - updatedWidth;
        topOffset = Math.round(Math.round(topOffset.plusMargin() + yPadding) + updatedHeight + innerPadding)
      }
      if (order === 2) {
        leftOffset = layoutWidth.getHalf() + (innerPadding / 2)
        topOffset = Math.round(topOffset.plusMargin() + yPadding);
      }

      if (order === 3) {
        leftOffset = layoutWidth.getHalf() + (innerPadding / 2)
        topOffset = Math.round(Math.round(topOffset.plusMargin() + yPadding) + updatedHeight + innerPadding)
      }
      break;
    }
    case SIZE_TYPES.TWO_VERTICAL_ONE_HORISONTAL_HALF: {
      if (order === 1) {
        leftOffset = layoutWidth.getHalf() + xPadding;
        topOffset = Math.round(topOffset.plusMargin() + yPadding);
      }
      if (order === 2) {
        leftOffset = layoutWidth.getHalf() + xPadding + updatedWidth + innerPadding
        topOffset = Math.round(topOffset.plusMargin() + yPadding);
      }
      if (order === 3) {
        leftOffset = layoutWidth.getHalf() + xPadding
        topOffset = Math.round(layoutHeight.minusMargin() - yPadding - updatedHeight);
      }
      break
    }
    case SIZE_TYPES.TWO_HORISONTAL_HALF: {
      leftOffset = layoutWidth.getHalf() + xPadding
      if (order === 1) {
        topOffset = Math.round(topOffset.plusMargin() + yPadding);
      }
      if (order === 2) {
        topOffset = Math.round(topOffset.plusMargin() + yPadding + updatedHeight + innerPadding);
      }
      break
    }
    case SIZE_TYPES.FOUR_VERTICAL_HALF: {
      if (order === 1) {
        leftOffset = layoutWidth.getHalf() + xPadding;
        topOffset = Math.round(topOffset.plusMargin() + yPadding);
      }
      if (order === 2) {
        leftOffset = layoutWidth.getHalf() + xPadding + updatedWidth + innerPadding
        topOffset = Math.round(topOffset.plusMargin() + yPadding);
      }
      if (order === 3) {
        leftOffset = layoutWidth.getHalf() + xPadding
        topOffset = Math.round(layoutHeight.minusMargin() - yPadding - updatedHeight);
      }
      if (order === 4) {
        leftOffset = layoutWidth.getHalf() + xPadding + updatedWidth + innerPadding
        topOffset = Math.round(layoutHeight.minusMargin() - yPadding - updatedHeight);
      }

      break
    }
    case SIZE_TYPES.TWO_VERTICAL_CUSTOM: {
      leftOffset = layoutWidth - CUT_OFF - xPadding - updatedWidth;
      if (order === 1) {
        topOffset = Math.round(topOffset.plusMargin() + yPadding);
      }
      if (order === 2) {
        topOffset = Math.round(topOffset.plusMargin() + yPadding + updatedHeight + innerPadding);
      }
      break
    }
    default:
      break;
  }

  return { leftOffset, topOffset };
};

export const processPhotos = async (data) => {
  for (const item of data) {
    await processStudent(item);
  }
};

async function processStudent(item) {
  const { name, pages } = item;
  const studentFolderPath = path.join(parentFolderPath, name);
  await createStudentFolder(studentFolderPath);

  for (const page of pages) {
    const { layoutPath, pageName, photos } = page;
    
    const layout = await sharp(`${MAIN_FOLDER_NAME}/${layoutPath}`);

    const { width: layoutWidth, height: layoutHeight } = await layout.metadata();
    
    const dataToComposite = await processPage(photos, layoutWidth, layoutHeight);
    
    await layout.composite(dataToComposite);
    await layout.toFile(`${studentFolderPath}/${pageName}.jpg`);
  }
}

async function processPage(photos, layoutWidth, layoutHeight) {
  const dataToComposite = [];
  const promises = photos.map(async (photo, i) => {
    const { path, sizeType } = photo;

    const imagePath = `${MAIN_FOLDER_NAME}/${SOURCE_FOLDER_NAME}/${path}`
    fs.access(imagePath, fs.constants.F_OK, (err) => {
      if (err) {
        console.error('Файл не найден:', imagePath);
        return;
      }
    })
    const currentPhoto = sharp(`${MAIN_FOLDER_NAME}/${SOURCE_FOLDER_NAME}/${path}`);
    const { resizedPhoto, updatedWidth, updatedHeight } = await resizePhoto(currentPhoto, sizeType, layoutWidth, layoutHeight, i);
    const { leftOffset, topOffset } = await getOffsets(updatedWidth, updatedHeight, sizeType, layoutWidth, layoutHeight, i);
    dataToComposite.push({ input: await resizedPhoto.toBuffer(), left: leftOffset, top: topOffset });
  });

  await Promise.allSettled(promises);

  return dataToComposite;
}

const processPhotoNumbers = (photoNumbers, layoutTypesOrder) => {
  return photoNumbers.map((number, index) => ({
    path: `фото-${number}.jpg`,
    sizeType: layoutTypesOrder[index]
  })
  )
}