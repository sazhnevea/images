import csv from 'csv-parser';
import fs from 'fs';
import { getAlbumName, getImageName, getKeyByValue, getNumberStrings, parseNumberArray } from '../common/common.js';
import { ALBUM_NAMES_DATA, LAYOUT_PATH, LAYOUT_TYPE, LAYOUT_TYPE_MAPPING } from '../constants.js';

const layoutTypeValues = Object.values(LAYOUT_TYPE)
export async function processCSVDataToImpose(csvPath) {
  return new Promise((resolve, reject) => {
    const data = { albumName: '', studentsData: [] };
    let currentStudent = {};
    let pageNumber = 1;

    const readStream = fs.createReadStream(csvPath);
    readStream.pipe(csv())
      .on('data', (studentData) => {
        const albumName = getAlbumName(studentData)
        if (!data.albumName) {
          data.albumName = albumName;
        }

        if (studentData['Имя участника']) {
          currentStudent = {
            name: studentData['Имя участника'],
            pages: [],
          };

          for (const property in studentData) {
            const fixedColumnName = layoutTypeValues.find(layoutType => property.includes(layoutType))
            if (fixedColumnName && studentData[property]) {
              const layoutTypesOrder = LAYOUT_TYPE_MAPPING[getKeyByValue(LAYOUT_TYPE, fixedColumnName)];
              const numberStrings = getNumberStrings(studentData[property]);
              if (numberStrings) {
                const photoNumbers = parseNumberArray(numberStrings);
                const photos = processPhotoNumbers(photoNumbers, layoutTypesOrder, studentData, property);
                currentStudent.pages.push({
                  layoutPath: LAYOUT_PATH,
                  pageName: `${pageNumber}`,
                  pageType: fixedColumnName,
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

      })
      .on('end', () => {
        if (Object.keys(ALBUM_NAMES_DATA).includes(data.albumName)) {
          const albumData = ALBUM_NAMES_DATA[data.albumName]
          data.studentsData.forEach((studentData) => {
            studentData.pages.forEach(pageData => {
              const { pageType } = pageData
              const layoutData = albumData.layoutsData[pageType]
              if (layoutData) {
                const pagesAmount = studentData.pages.length;
                pageData.pagesAmount = pagesAmount
                pageData.step = layoutData.step
                pageData.layoutPath = `${layoutData.layoutPathFolder}${Math.max(2, studentData.pages.length)}.jpg`
                pageData.decorations = layoutData.decorations
              }
            })
          })
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
