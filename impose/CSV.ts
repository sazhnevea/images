import csv from 'csv-parser';
import { PathLike, createReadStream } from 'fs';
import { getAlbumName, getNumberStrings, parseNumberArray } from '../common/common';
import { ALBUM_DATA, LAYOUT_PATH, LAYOUT_TYPE_SIZES_MAPPING } from '../constants.js';
import { ALBUM_NAMES, Data, DataRaw, LAYOUT_TYPE, LayoutData, Page, PageRaw, Photo, PhotoRaw, SIZE_TYPES, Student, StudentRaw } from './types';

const layoutTypeValues = Object.values(LAYOUT_TYPE)

export async function processCSVDataToImpose(csvPath: PathLike): Promise<Data> {
  return new Promise((resolve, reject) => {
    const dataRaw: DataRaw = { albumName: '', studentsData: [] };
    let currentStudent: StudentRaw = {} as StudentRaw;
    let pageNumber = 1;

    const readStream = createReadStream(csvPath);
    readStream.pipe(csv())
      .on('data', (studentData) => {
        const albumName = getAlbumName(studentData)
        if (!dataRaw.albumName) {
          dataRaw.albumName = albumName;
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
              const sizesMappingList = LAYOUT_TYPE_SIZES_MAPPING[fixedColumnName];
              const photoNumbers = getNumberStrings(studentData[property]);
              if (photoNumbers) {
                const photos = processPhotoNumbers(photoNumbers, sizesMappingList);
                currentStudent.pages.push({
                  isCover: LAYOUT_TYPE.COVER === fixedColumnName,
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
          dataRaw.studentsData.push(currentStudent);
          pageNumber = 1;
        }
      })
      .on('end', () => {
        if (Object.keys(ALBUM_DATA).includes(dataRaw.albumName)) {
          const albumData = ALBUM_DATA[dataRaw.albumName as ALBUM_NAMES]
          const studentaData: Student[] = []
          dataRaw.studentsData.forEach((currentStudentData, index) => {
            studentaData[index].name = currentStudentData.name
            const pages = currentStudentData.pages.map(pageRawData => {
              // const page: Page = pageData
              const { pageType, isCover } = pageData;
              const pagesAmount = currentStudentData.pages.length;
              const layoutData = albumData.layouts[pageType]
              const pageData = populatePage(pageRawData, layoutData, pagesAmount)

                const { step, layoutPathFolder, decoration } = layoutData 
            
            })
            studentaData[index].pages = pages

          })
        } else {
          console.log(`${data.albumName} is missing in ALBUM_DATA`)
        }
        resolve(data);
      })
      .on('error', (error) => {
        reject(error);
      });
  });
}

const processPhotoNumbers = (photoNumbers: number[], layoutTypesOrder: SIZE_TYPES[]): PhotoRaw[] => {
  return photoNumbers.map((number, index) => {
    return ({
      path: `${number}.jpg`,
      sizeType: layoutTypesOrder[index]
    })
  })
}

const getLayoutTypeKey = (value: string): string | undefined => {
  for (const key in LAYOUT_TYPE) {
    if (LAYOUT_TYPE[key as keyof typeof LAYOUT_TYPE] === value) {
      return key;
    }
  }
  return undefined;
}

const populatePage = (pageDataRaw: PageRaw, layoutData: LayoutData, pagesAmount?: number): Page => {
    const { pageType, isCover } = pageDataRaw;

      const { step, layoutPathFolder, decoration } = layoutData 

      return {
        ...pageDataRaw,
        layoutPath: LAYOUT_PATH,
        pagesAmount: pagesAmount || 1,
        step: step || 0,
        decoration: decoration,

      }
}