import csv from 'csv-parser';
import fs from 'fs';
import { filterExistingPhotoNumbersOLD, getAlbumName, getDirectionsList, withJPG, getLayoutType, getNumberStrings, parseNumberArray, printMissingPhotoListMessage } from '../common/common.js';
import { ALBUM_NAMES_DATA, DATA_FOLDER_NAME, LAYOUT_PATH, LAYOUT_TYPE, LAYOUT_TYPE_MAPPING, FILES_FOLDER, ROW_NAMES } from '../constants.js';

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
        const missingPhotos = new Set();
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
                const numberStrings = getNumberStrings(studentData[property]);
                if (!numberStrings.length) {
                  continue
                }
                
                const { existing, missing } = await filterExistingPhotoNumbersOLD(numberStrings, `${DATA_FOLDER_NAME}/${FILES_FOLDER}`)
                if (missing.length) {
                  missing.forEach((missingPhoto) => missingPhotos.add(missingPhoto));
                }

                if (!existing.length) {
                  continue
                }
    
                const directionList = (await getDirectionsList(`${DATA_FOLDER_NAME}/${FILES_FOLDER}`, existing)).map(({ direction }) => direction);
                const pageType = getLayoutType(directionList)
                const studentName = currentStudent.name
                if (!pageType) {
                  console.log(`У студента ${studentName} неверно подобраны фотографии в столбце "${property}". Номера фотографий: ${existing}. Разворот не создан!`)
                  continue
                }

                const photoNumbers = parseNumberArray(existing);
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
              }
            }
            data.studentsData.push(currentStudent);
            currentStudent = {};
            pageNumber = 1;
          }
        }

        printMissingPhotoListMessage(missingPhotos)


        if (Object.keys(ALBUM_NAMES_DATA).includes(data.albumName)) {

          const albumData = ALBUM_NAMES_DATA[data.albumName];
          data.studentsData.forEach((studentData) => {
            
            studentData.pages.forEach((pageData, index) => {

              const { pageType } = pageData;
              const layoutData = albumData.layoutsData[index === 0 ? LAYOUT_TYPE.COVER : pageType];

              if (layoutData) {
                const { step, layoutPathFolder, decoration } = layoutData;
                const pagesAmount = studentData.pages.length;
                pageData.pagesAmount = pagesAmount;
                pageData.step = step || 0;
                pageData.layoutPath = `${layoutPathFolder}${step ? studentData.pages.length - 1 : 1}.jpg`;
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
        path: `${DATA_FOLDER_NAME}/${FILES_FOLDER}/${withJPG(number)}`,
        sizeType: layoutTypesOrder[index]
      })
    }
    console.error(`Фотография № ${number} является лишней в развороте ${pageType} у студента ${studentName}`)
  }).filter(Boolean)
}
