import csv from 'csv-parser';
import fs from 'fs';
import { getImageName, getKeyByValue, getNumberStrings, parseNumberArray } from '../common/common.js';
import { ALBUM_NAMES_DATA, LAYOUT_PATH, LAYOUT_TYPE_MAPPING } from '../constants.js';
import { CSVColumn, CVSColumnName, LAYOUT_TYPE, Page, Photo, SIZE_TYPE, Student } from './types.js';

const layoutTypeValues = Object.values(LAYOUT_TYPE)

export async function processCSVDataToImpose(csvPath: string): Promise<Student[]>  {
  return new Promise((resolve, reject) => {
    const studentsData: Student[] = [];
    
    const readStream = fs.createReadStream(csvPath);
    readStream.pipe(csv())
    .on('data', (studentData: CSVColumn) => {  
    
        let currentStudent: Student = {name: '', pages: []};
        let pageNumber: number = 1;

        const studentName = studentData[CVSColumnName.studentName]

        if (studentName) {
          currentStudent.name = studentName
        
          const validLayoutFields = layoutTypeValues.filter(layoutType => studentData.hasOwnProperty(layoutType) && studentData[layoutType].length)

          const pageData: Partial<Page> = {}
          for (let i = 0; i <= validLayoutFields.length - 1; i++) {
            pageData.pageType = validLayoutFields[i];

            const photoSets = getPhotoSets(studentData[validLayoutFields[i]])

            const photos: Photo[] = []
            photoSets.forEach(photoSet => {
              photoSet.forEach(photoNumber => {
                const photoData = {
                  path: `${photoNumber}.jpg`,
                  sizeType: ''
                };
                photos.push(photoData)
                console.log('photoNumber', photoNumber)
              })
            })

            // const pageData: Page = {
              // сформировать объект
              // pageType: validLayoutFields[i]
            // }
          }

          // for (const property in studentData) {
            // if (property in LAYOUT_TYPE) {
            //   console.log('in')
            //   console.log('property', property)
            //   console.log(123, studentData[property])
            // }

            // if (studentData[property]) {
              // console.log('studentData[property]', studentData[property])
              // const layoutTypesOrder: SIZE_TYPE[] = LAYOUT_TYPE_MAPPING[getKeyByValue(LAYOUT_TYPE, fixedColumnName)];
              // const numberStrings = getNumberStrings(studentData[property]);
              // if (numberStrings) {
              //   const photoNumbers = parseNumberArray(numberStrings);
              //   const photos = processPhotoNumbers(photoNumbers, layoutTypesOrder, studentData['Имя участника'], property);
              //   currentStudent.pages.push({
              //     layoutPath: LAYOUT_PATH,
              //     pageOutputFilename: `${pageNumber}`,
              //     pageType: fixedColumnName,
              //     photos: photos,
              //   });
              //   pageNumber++;
              // } else {
              //   console.error(`У студента ${studentData['Имя участника']} отсутствуют номера фотографий в развороте ${property}`);
              // }
            // }
          // }
          studentsData.push(currentStudent);
          // currentStudent = {};
          pageNumber = 1;
        }

      })
      .on('end', () => {
        // if (Object.keys(ALBUM_NAMES_DATA).includes(data.albumName)) {
        //   const albumData = ALBUM_NAMES_DATA[data.albumName]
        //   data.studentsData.forEach((studentData) => {
        //     studentData.pages.forEach(pageData => {
        //       const { pageType } = pageData
        //       const layoutData = albumData.layoutsData[pageType]
        //       if (layoutData) {
        //         const pagesAmount = studentData.pages.length;
        //         pageData.pagesAmount = pagesAmount
        //         pageData.step = layoutData.step
        //         pageData.layoutPath = `${layoutData.layoutPathFolder}${Math.max(2, studentData.pages.length)}.jpg`
        //         pageData.decorations = layoutData.decorations
        //       }
        //     })
        //   })
        // }

        resolve(studentsData);
      })
      .on('error', (error) => {
        reject(error);
      });
  });
}


// const processPhotoNumbers = (photoNumbers: string[], layoutTypesOrder: SIZE_TYPE[], studentName: string, property) => {
//   return photoNumbers.map((number, index) => {
//     if (layoutTypesOrder[index]) {
//       return ({
//         path: getImageName(number),
//         sizeType: layoutTypesOrder[index]
//       })
//     }
//     console.error(`Фотография № ${number} является лишней в развороте ${property} у студента ${studentName}`)
//   }).filter(Boolean)
// }

const getPhotoSets = (string: string) => {
  const result: string[][] = [];
  console.log('string', string)
  const stringSets = string.split(';')
  stringSets.forEach(photoString => {
    const photoArray: string[] = []
    const photos = photoString.split(',')
    photos.forEach(photo => photoArray.push(photo))
    result.push(photoArray)
  })
  return result
}