import csv from 'csv-parser';
import fs from 'fs';
import { getAlbumName, getDirectionsList, getImageName, getLayoutType, getNumberStrings, parseNumberArray } from '../common/common.js';
import { ALBUM_NAMES_DATA, DATA_FOLDER_NAME, LAYOUT_PATH, LAYOUT_TYPE_MAPPING, RETOUCH_FOLDER_NAME, ROW_NAMES } from '../constants.js';

export async function processCSVDataToImpose(csvPath) {
  return new Promise((resolve, reject) => {
    const data = { albumName: '', studentsData: [] };
    let currentStudent = {};
    let pageNumber = 1;

    const studentsData = [];

    const readStream = fs.createReadStream(csvPath);
    readStream.pipe(csv())
      .on('data', (studentData) => {
        studentsData.push(studentData);
      })
      .on('end', async () => {
        for (let i = 0; i < studentsData.length; i++) {
          const studentData = studentsData[i]
          const albumName = getAlbumName(studentData);
          if (!data.albumName) {
            data.albumName = albumName;
          }

          if (studentData[ROW_NAMES.studentName]) {
            currentStudent = {
              name: studentData[ROW_NAMES.studentName],
              pages: [],
            };

            for (const property in studentData) {
              const isPageColumn = property.includes(ROW_NAMES.page);
              if (isPageColumn && studentData[property]) {        
                const photoNumbersString = getNumberStrings(studentData[property]);
                if (!photoNumbersString.length) {
                  continue
                }        
                const directionList = (await getDirectionsList(`${DATA_FOLDER_NAME}/${RETOUCH_FOLDER_NAME}`, photoNumbersString)).map(({ direction }) => direction);
                const pageType = getLayoutType(directionList)
                const studentName = currentStudent.name
                if (!pageType) {
                  console.log(`У студента ${studentName} неверно подобраны фотографии в столбце "${property}". Номера фотографий: ${photoNumbersString}. Разворот не создан!`)
                  continue
                }
                
                if (photoNumbersString) {
                  const photoNumbers = parseNumberArray(photoNumbersString);
                  const photos = processPhotoNumbers({
                    photoNumbers,
                    studentName: currentStudent.name,
                    pageType
                  });
                  currentStudent.pages.push({
                    layoutPath: LAYOUT_PATH,
                    pageName: `${pageNumber}`,
                    pageType,
                    photos,
                  });
                  pageNumber++;
                } else {
                  console.error(`У студента ${studentData[ROW_NAMES.studentName]} отсутствуют номера фотографий в развороте ${property}`);
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

const processPhotoNumbers = ({
  photoNumbers,
  studentName,
  pageType
}) => {
  const layoutTypesOrder = LAYOUT_TYPE_MAPPING[pageType]
  return photoNumbers.map((number, index) => {
    if (layoutTypesOrder[index]) {
      return ({
        path: `${DATA_FOLDER_NAME}/${RETOUCH_FOLDER_NAME}/${getImageName(number)}`,
        sizeType: layoutTypesOrder[index]
      })
    }
    console.error(`Фотография № ${number} является лишней в развороте ${pageType} у студента ${studentName}`)
  }).filter(Boolean)
}
