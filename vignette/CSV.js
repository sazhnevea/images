import csv from 'csv-parser';
import fs from 'fs';
import { getImageName } from '../common/common.js';
import { DATA_FOLDER_NAME, ROW_NAMES, VIGNETTE_FOLDER_NAME } from '../constants.js';

export async function processCSVData(csvPath) {
  return new Promise((resolve, reject) => {
    const data = []
    const studentsData = [];

    let currentStudent = {};
    const readStream = fs.createReadStream(csvPath);
    readStream.pipe(csv())
      .on('data', (studentData) => {
        data.push(studentData);
      })
      .on('end', () => {
        for (let i = 0; i < data.length; i++) {
          const studentData = data[i]
          const studentName = studentData[ROW_NAMES.studentName]
          if (studentName) {
            const [firstName, secondName] = studentName.split(' ')
            currentStudent.firstName = firstName
            currentStudent.secondName = secondName

            for (const property in studentData) {
              if (property.includes('Учитель')) {
                currentStudent.isTeacher = studentData[property].includes('+')
                continue
              }
              const isVignette = property.includes('Виньетка');
              if (isVignette && studentData[property]) {
                const photoNumberString = studentData[property];             
                if (photoNumberString) {
                  currentStudent.portrait = `${DATA_FOLDER_NAME}/${VIGNETTE_FOLDER_NAME}/${getImageName(photoNumberString)}`; 
                } else {
                  console.error(`У студента ${studentData[ROW_NAMES.studentName]} отсутствуют номера фотографий в развороте ${property}`);
                }
              }
            }
            studentsData.push(currentStudent);
            currentStudent = {};
          }
        }

        resolve(studentsData);
      })
      .on('error', (error) => {
        reject(error);
      });
  });
}
