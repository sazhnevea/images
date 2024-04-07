import csv from 'csv-parser';
import fs from 'fs';
import { getAlbumName, getImageName, getSizeCode, getNumberStrings, parseNumberArray } from '../common/common';
import { ALBUM_DATA, LAYOUT_PATH, LAYOUT_TYPE_MAPPING } from '../constants.js';
import { ALBUM_NAMES, Data, LAYOUT_TYPE, Photo, SIZE_CODES, SIZE_TYPES, Student } from './types';

const layoutTypeValues = Object.values(LAYOUT_TYPE)

export async function processCSVDataToImpose(csvPath: fs.PathLike) {
  return new Promise((resolve, reject) => {
    const data: Data = { albumName: '', studentsData: [] };
    let currentStudent: Student = {} as Student;
    let pageNumber = 1;

    const readStream = fs.createReadStream(csvPath);
    readStream.pipe(csv())
      .on('data', (studentData) => {
        const albumName = getAlbumName(studentData)
        if (!data.albumName) {
          data.albumName = albumName;
        }

        const studentName = studentData['Имя участника']
        if (studentName) {
          currentStudent = {
            name: studentName,
            pages: [],
          };

          for (const property in studentData) {
            const fixedColumnName = layoutTypeValues.find(layoutType => property.includes(layoutType))
            if (fixedColumnName && studentData[property]) {
              const sizeCode = getSizeCode(LAYOUT_TYPE, fixedColumnName)
              const layoutTypesOrder = LAYOUT_TYPE_MAPPING[sizeCode as SIZE_CODES];
              const numberStrings = getNumberStrings(studentData[property]);
              if (numberStrings) {
                const photoNumbers = parseNumberArray(numberStrings);
                const photos = processPhotoNumbers(photoNumbers, layoutTypesOrder);
                currentStudent.pages.push({
                  layoutPath: LAYOUT_PATH,
                  pageName: `${pageNumber}`,
                  pageType: fixedColumnName,
                  photos: photos,
                });
                pageNumber++;
              } else {
                console.error(`У студента ${studentName} отсутствуют номера фотографий в развороте ${property}`);
              }
            }
          }
          data.studentsData.push(currentStudent);
          pageNumber = 1;
        }

      })
      .on('end', () => {
        if (Object.keys(ALBUM_DATA).includes(data.albumName)) {
          const albumData = ALBUM_DATA[data.albumName]
          data.studentsData.forEach((studentData) => {
            studentData.pages.forEach(pageData => {
              const { pageType } = pageData;
              const layoutData = albumData.layoutsData[pageType]
              if (layoutData) {
                const { step, layoutPathFolder, decoration } = layoutData 
                const pagesAmount = studentData.pages.length;
                pageData.pagesAmount = pagesAmount
                pageData.step = step || 0
                pageData.layoutPath = `${layoutPathFolder}${step ? Math.max(2, studentData.pages.length - 1) : 1}.jpg`
                pageData.decoration = decoration
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

const processPhotoNumbers = (photoNumbers: number[], layoutTypesOrder: SIZE_TYPES[]) => {
  return photoNumbers.map((number, index) => {
    return ({
      path: getImageName(number),
      sizeType: layoutTypesOrder[index]
    })
  })
}
