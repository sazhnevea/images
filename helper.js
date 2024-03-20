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
  CUT_OFF
} from './constants.js';

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

export async function processCSVData(csvPath) {
  return new Promise((resolve, reject) => {
    const data = [];

    const readStream = fs.createReadStream(csvPath);

    readStream.pipe(csv())
      .on('data', (row) => {
        console.log('row', row)

        const dataToPush = {
          name: row['Имя участника'],
          pages: [
            {
              layoutPath: `layoutWithBorder.jpg`,
              pageName: '2',
              // F1C1 слева 1 в склянь, 1 справа cutted
              photos: [
                {
                  path: `фото-${row['2 разворот первый портрет']}.jpg`,
                  sizeType: SIZE_TYPES.HALF,
                },
                {
                  path: `фото-${row['2 разворот второй портрет']}.jpg`,
                  sizeType: SIZE_TYPES.HALF_CUTTED,
                },
              ]
            },
            {
              layoutPath: `layoutWithBorder.jpg`,
              pageName: '3',
              // слева 1 справа 3 горизонтали
              photos: [
                {
                  path: `фото-${row['3 разворот 1']}.jpg`,
                  sizeType: SIZE_TYPES.HALF,
                },
                {
                  path: `фото-${row['3 разворот 2']}.jpg`,
                  sizeType: SIZE_TYPES.THREE_HORISONTAL_HALF,
                },
                {
                  path: `фото-${row['3 разворот 3']}.jpg`,
                  sizeType: SIZE_TYPES.THREE_HORISONTAL_HALF,
                },
                {
                  path: `фото-${row['3 разворот 4']}.jpg`,
                  sizeType: SIZE_TYPES.THREE_HORISONTAL_HALF,
                },
              ]
            },
            {
              layoutPath: `layoutWithBorder.jpg`,
              pageName: '4',
              // 4 горизонтали
              photos: [
                {
                  path: `фото-${row['3 разворот 1']}.jpg`,
                  sizeType: SIZE_TYPES.FOUR_HORISONTAL_FULL,
                },
                {
                  path: `фото-${row['3 разворот 2']}.jpg`,
                  sizeType: SIZE_TYPES.FOUR_HORISONTAL_FULL,
                },
                {
                  path: `фото-${row['3 разворот 3']}.jpg`,
                  sizeType: SIZE_TYPES.FOUR_HORISONTAL_FULL,
                },
                {
                  path: `фото-${row['3 разворот 4']}.jpg`,
                  sizeType: SIZE_TYPES.FOUR_HORISONTAL_FULL,
                },
              ]
            },
            {
              layoutPath: `layoutWithBorder.jpg`,
              pageName: '5',
              // слева 1 в склянь, справа 2 вертикали и 1 горизонталь
              photos: [
                {
                  path: `фото-${row['3 разворот 1']}.jpg`,
                  sizeType: SIZE_TYPES.HALF,
                },
                {
                  path: `фото-${row['3 разворот 2']}.jpg`,
                  sizeType: SIZE_TYPES.TWO_VERTICAL_ONE_HORISONTAL_HALF,
                },
                {
                  path: `фото-${row['3 разворот 3']}.jpg`,
                  sizeType: SIZE_TYPES.TWO_VERTICAL_ONE_HORISONTAL_HALF,
                },
                {
                  path: `фото-${row['3 разворот 4']}.jpg`,
                  sizeType: SIZE_TYPES.TWO_VERTICAL_ONE_HORISONTAL_HALF,
                },
              ]
            },
            {
              layoutPath: `layoutWithBorder.jpg`,
              pageName: '6',
              // 1 слева всклянь, справа 2 горизонтали
              photos: [
                {
                  path: `фото-${row['3 разворот 1']}.jpg`,
                  sizeType: SIZE_TYPES.HALF,
                },
                {
                  path: `фото-${row['3 разворот 2']}.jpg`,
                  sizeType: SIZE_TYPES.TWO_HORISONTAL_HALF,
                },
                {
                  path: `фото-${row['3 разворот 3']}.jpg`,
                  sizeType: SIZE_TYPES.TWO_HORISONTAL_HALF,
                },
              ]
            },
            {
              layoutPath: `layoutWithBorder.jpg`,
              pageName: '7',
              // 1 слева всклянь, справа 4 вертикали
              photos: [
                {
                  path: `фото-${row['3 разворот 1']}.jpg`,
                  sizeType: SIZE_TYPES.HALF,
                },
                {
                  path: `фото-${row['3 разворот 2']}.jpg`,
                  sizeType: SIZE_TYPES.FOUR_VERTICAL_HALF,
                },
                {
                  path: `фото-${row['3 разворот 3']}.jpg`,
                  sizeType: SIZE_TYPES.FOUR_VERTICAL_HALF,
                },
                {
                  path: `фото-${row['3 разворот 2']}.jpg`,
                  sizeType: SIZE_TYPES.FOUR_VERTICAL_HALF,
                },
                {
                  path: `фото-${row['3 разворот 3']}.jpg`,
                  sizeType: SIZE_TYPES.FOUR_VERTICAL_HALF,
                },
              ]
            },
            {
              layoutPath: `layoutWithBorder.jpg`,
              pageName: '8',
              // 1 слева на 3/4 и справа 2 вертикали
              photos: [
                {
                  path: `фото-${row['3 разворот 1']}.jpg`,
                  sizeType: SIZE_TYPES.THREE_QUARTERS,
                },
                {
                  path: `фото-${row['3 разворот 2']}.jpg`,
                  sizeType: SIZE_TYPES.TWO_VERTICAL_CUSTOM,
                },
                {
                  path: `фото-${row['3 разворот 3']}.jpg`,
                  sizeType: SIZE_TYPES.TWO_VERTICAL_CUSTOM,
                },
              ]
            },
          ]
        };
        data.push(dataToPush);
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
      updatedWidth = Math.round((layoutWidth - (CUT_OFF * 2) - doubleXPadding) * 0.80 + CUT_OFF)
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
        resizedPhoto = await photo.resize(updatedWidth, updatedHeight).sharpen({ sigma: 1 })
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
      updatedWidth = Math.round((layoutWidth - (CUT_OFF * 2) - doubleXPadding) * 0.20)
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
    await layout.toFile(`${studentFolderPath}/${pageName}.png`);
  }
}

async function processPage(photos, layoutWidth, layoutHeight) {
  const dataToComposite = [];
  const promises = photos.map(async (photo, i) => {
    const { path, sizeType } = photo;
    const currentPhoto = sharp(`${MAIN_FOLDER_NAME}/${SOURCE_FOLDER_NAME}/${path}`);
    const { resizedPhoto, updatedWidth, updatedHeight } = await resizePhoto(currentPhoto, sizeType, layoutWidth, layoutHeight, i);
    const { leftOffset, topOffset } = await getOffsets(updatedWidth, updatedHeight, sizeType, layoutWidth, layoutHeight, i);
    dataToComposite.push({ input: await resizedPhoto.toBuffer(), left: leftOffset, top: topOffset });
  });

  await Promise.all(promises);

  return dataToComposite;
}