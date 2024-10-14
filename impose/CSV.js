import csv from 'csv-parser';
import fs from 'fs';
import { getAlbumName, getDirection, getImageName, getNumberStrings, isArraysEqual, parseNumberArray } from '../common/common.js';
import { ALBUM_NAMES_DATA, COLUMN_NAME, DATA_FOLDER_NAME, LAYOUT_PATH, LAYOUT_TYPE_DIRECTION_MAPPING, LAYOUT_TYPE_MAPPING, RETOUCH_FOLDER_NAME } from '../constants.js';
import sharp from 'sharp';

const cachedMetadata = {};

const getDirectionsList = async (numberStrings) => {
  const directionsList = []
  for (const photoNumber of numberStrings) {
    if (!cachedMetadata[photoNumber]) {
      const imagePath = `${DATA_FOLDER_NAME}/${RETOUCH_FOLDER_NAME}/${getImageName(photoNumber)}`;
      const { width, height } = await sharp(imagePath).metadata();
      cachedMetadata[photoNumber] = { width, height };
    }
    directionsList.push(({
      photoNumber: photoNumber,
      direction: getDirection(cachedMetadata[photoNumber].width, cachedMetadata[photoNumber].height)}));
  }
  return directionsList
};

const getLayoutType = (directionList) => {
  const matchingLayoutType = Object.keys(LAYOUT_TYPE_DIRECTION_MAPPING).find((layoutType) => {
    const directionMapping = LAYOUT_TYPE_DIRECTION_MAPPING[layoutType];
    return isArraysEqual(directionMapping, directionList);
  });
  return matchingLayoutType || null;
}

const columnNames = Object.values(COLUMN_NAME)

export async function processCSVDataToImpose(csvPath) {
  return new Promise((resolve, reject) => {
    const data = { albumName: '', studentsData: [] };
    let currentStudent = {};
    let pageNumber = 1;

    const allStudentData = []; // Массив для накопления всех данных студентов

    const readStream = fs.createReadStream(csvPath);
    readStream.pipe(csv())
      .on('data', (studentData) => {
        allStudentData.push(studentData);
      })
      .on('end', async () => {
        for (let studentData of allStudentData) {
          const albumName = getAlbumName(studentData);
          if (!data.albumName) {
            data.albumName = albumName;
          }

          if (studentData['Имя участника']) {
            currentStudent = {
              name: studentData['Имя участника'],
              pages: [],
            };

            for (const property in studentData) {
              const fixedColumnName = columnNames.find(layoutType => property.includes(layoutType));
              if (fixedColumnName && studentData[property]) {
                const numberStrings = getNumberStrings(studentData[property]);             
                const directionList = (await getDirectionsList(numberStrings)).map(({ direction }) => direction);
                const layoutType = getLayoutType(directionList)
                const layoutTypesOrder = LAYOUT_TYPE_MAPPING[layoutType];
   
                if (numberStrings) {
                  const photoNumbers = parseNumberArray(numberStrings);
                  const photos = processPhotoNumbers(photoNumbers, layoutTypesOrder, studentData, property);
                  currentStudent.pages.push({
                    layoutPath: LAYOUT_PATH,
                    pageName: `${pageNumber}`,
                    pageType: layoutType,
                    photos: photos,
                  });
                  pageNumber++;
                } else {
                  console.error(`У студента ${studentData['Имя участника']} отсутствуют номера фотографий в развороте ${property}`);
                }
              }
            }
            data.studentsData.push(currentStudent);
            currentStudent = {};
            pageNumber = 1;
          }
        }

        if (Object.keys(ALBUM_NAMES_DATA).includes(data.albumName)) {
          const albumData = ALBUM_NAMES_DATA[data.albumName];
          data.studentsData.forEach((studentData) => {
            studentData.pages.forEach((pageData) => {
              const { pageType } = pageData;
              const layoutData = albumData.layoutsData[pageType];
              if (layoutData) {
                const { step, layoutPathFolder, decoration } = layoutData;
                const pagesAmount = studentData.pages.length;
                pageData.pagesAmount = pagesAmount;
                pageData.step = step || 0;
                pageData.layoutPath = `${layoutPathFolder}${step ? Math.max(2, studentData.pages.length - 1) : 1}.jpg`;
                pageData.decoration = decoration;
              }
            });
          });
        }
        resolve(data);
      })
      .on('error', (error) => {
        reject(error);
      });
  });
}

const processPhotoNumbers = (photoNumbers, layoutTypesOrder, studentData, property) => {
  return photoNumbers.map((number, index) => {
    if (layoutTypesOrder[index]) {
      return ({
        path: getImageName(number),
        sizeType: layoutTypesOrder[index]
      })
    }
    console.error(`Фотография № ${number} является лишней в развороте ${property} у студента ${studentData['Имя участника']}`)
  }).filter(Boolean)
}
