import csv from 'csv-parser';
import { PathLike, createReadStream } from 'fs';
import { calculateLeftOffsetBasedOnPagesAmount, getAlbumName, getNumberStrings } from '../common/common';
import { ALBUM_DATA, DATA_FOLDER_NAME, LAYOUT_TYPE_SIZES_MAPPING, RETOUCH_FOLDER_NAME } from '../constants.js';
import { ALBUM_NAMES, Data, DataRaw, Decoration, LAYOUT_TYPE, LayoutData, Page, PageRaw, Photo, PhotoRaw, PhotoSize, PhotosSizeAndOffsetsDataInOrder, SIZE_TYPES, Student, StudentRaw } from './types';

const layoutTypeValues = Object.values(LAYOUT_TYPE)

export async function processCSVDataToImpose(csvPath: PathLike): Promise<Data> {
  return new Promise((resolve, reject) => {
    const data: Data = {} as Data;
    const dataRaw: DataRaw = { albumName: '', studentsData: [] };
    let currentStudent: StudentRaw = {} as StudentRaw;
    let pageNumber = 1;
    
    const readStream = createReadStream(csvPath);
    readStream.pipe(csv())
      .on('data', (studentData) => {
        const albumName = getAlbumName(studentData)
        if (!dataRaw.albumName) {
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
        if (Object.keys(ALBUM_DATA).includes(data.albumName)) {
          const albumData = ALBUM_DATA[data.albumName as ALBUM_NAMES]
          const studentsData: Student[] = []
          dataRaw.studentsData.forEach((currentStudentData) => {
            const student: Student = {} as Student;
            student.name = currentStudentData.name;

            const pagesAmount = currentStudentData.pages.length;
            const pages = currentStudentData.pages.map(pageRawData => {
              const { pageType } = pageRawData;
              const layoutData = albumData.layouts[pageType]
              return populatePage(pageRawData, layoutData, pagesAmount)
            })
            student.pages = pages
            studentsData.push(student)
          })
          data.studentsData = studentsData
        } else {
          console.log(`${dataRaw.albumName} is missing in ALBUM_DATA`)
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
      path: `${DATA_FOLDER_NAME}/${RETOUCH_FOLDER_NAME}/${number}.jpg`,
      sizeType: layoutTypesOrder[index]
    })
  })
}

const populatePage = (pageDataRaw: PageRaw, layoutData: LayoutData, pagesAmount?: number): Page => {
    const { photos, isCover } = pageDataRaw;
    const { name, step, layoutPathFolder, decoration, photosSizeAndOffsetsDataInOrder } = layoutData 
      return {
        ...pageDataRaw,
        layoutPath: getLayoutPath(layoutPathFolder, name, isCover, pagesAmount || 1),
        photos: populatePhotos(photos, photosSizeAndOffsetsDataInOrder, isCover, step, pagesAmount),
        step,
        decoration: decoration && processDecoration(decoration, isCover, pagesAmount, step),
      }
}

const processDecoration = (decoration: Decoration, isCover: boolean, pagesAmount?: number, step?: number): Decoration => {
  if (!isCover) {
    return decoration
  }
  return {
    ...decoration,
    path: getLayoutPath(decoration.path, decoration.name, isCover, pagesAmount || 1),
    offsets: {
      ...decoration.offsets,
      left: withStep(decoration.offsets.left, pagesAmount, step) 
    }
  }
}

const populatePhotos = (photo: PhotoRaw[], photosSizeAndOffsetsDataInOrder: PhotosSizeAndOffsetsDataInOrder[], isCover: boolean, step?: number, pagesAmount?: number): Photo[] => {
  return photo.map((photo, index) => ({
    ...photo,
    sizeAndOffset: {
      ...photosSizeAndOffsetsDataInOrder[index],
      left: isCover ? withStep(photosSizeAndOffsetsDataInOrder[index].left, pagesAmount, step) : photosSizeAndOffsetsDataInOrder[index].left
    }
  }))
}

const withStep = (value: number, step?: number, pagesAmount?: number): number => {
return value + calculateLeftOffsetBasedOnPagesAmount(pagesAmount || 1, step || 0)
}

const getLayoutPath = (layoutPathFolder: string, name: string, isCover: boolean, pagesAmount: number): string => {
  if (isCover) {
    return `${layoutPathFolder}${Math.max(2, pagesAmount - 1) > 6 ? 6 : pagesAmount - 1}.jpg`
  }
  return `${layoutPathFolder}/${name}`
}