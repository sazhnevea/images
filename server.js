import express from 'express'
import cors from 'cors'
import multer from 'multer';
import { createFolder } from './common/common.js'
import { RESULT } from './constants.js'
import { processCSVDataToImpose } from './impose/CSV.js';

const upload = multer({ dest: 'uploads/' });

const app = express()
app.use(cors())

app.get('/', function (req, res) {
  createFolder(RESULT)
  // console.log('req', req)
  res.send('Hello World')
})

app.post('/csv', upload.single('file'), async (req, res) => {
  try {
    const csvFilePath = req.file.path; // Путь к загруженному файлу
    console.log('csvFilePath', csvFilePath)
    const data = await processCSVDataToImpose(csvFilePath);
    console.log('data', data)
    res.status(200).json(data);
  } catch (error) {
    console.error('Error processing CSV:', error);
    res.status(500).send('Error processing CSV');
  }
});

app.listen(3000) 
