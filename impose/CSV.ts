import csv from 'csv-parser';
import { PathLike, createReadStream } from 'fs';
import { getAlbumName, getNumberStrings, parseNumberArray } from '../common/common';
import { ALBUM_DATA, LAYOUT_PATH, LAYOUT_TYPE_SIZES_MAPPING } from '../constants.js';
import { ALBUM_NAMES, Data, DataRaw, LAYOUT_TYPE, LayoutData, Page, PageRaw, Photo, PhotoRaw, PhotoSize, SIZE_TYPES, Student, StudentRaw } from './types';

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
          const studentsData: Student[] = []
          dataRaw.studentsData.forEach((currentStudentData) => {
            const student: Student = {} as Student;
            student.name = currentStudentData.name;

            const pagesAmount = currentStudentData.pages.length;
            const pages = currentStudentData.pages.map(pageRawData => {
              const { pageType} = pageRawData;
              const layoutData = albumData.layouts[pageType]
              return populatePage(pageRawData, layoutData, pagesAmount)
            })
            student.pages = pages
            studentsData.push(student)
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
    const { photos, isCover } = pageDataRaw;
    const { step, layoutPathFolder, decoration, photosSizeDataOrder } = layoutData 
      return {
        ...pageDataRaw,
        layoutPath: getLayoutPath(layoutPathFolder, isCover, pagesAmount || 1),
        photos: populatePhotos(photos, photosSizeDataOrder),
        step,
        decoration,
      }
}

const populatePhotos = (photo: PhotoRaw[], photosSizeDataOrder: PhotoSize[]): Photo[] => {
  return photo.map((photo, index) => ({
    ...photo,
    size: photosSizeDataOrder[index]
  }))
}

const getLayoutPath = (layoutPathFolder: string, isCover: boolean, pagesAmount: number): string => {
  if (isCover) {
    return `${layoutPathFolder}${Math.max(2, pagesAmount - 1)}.jpg`
  }
  return layoutPathFolder
}