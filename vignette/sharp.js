import fs from 'fs';
import sharp from 'sharp';
import { CUT_OFF } from '../constants.js';
import { addText } from './text.js';

const PADDING = 186;
const INNER_PADDING = 40;

export const processVignette = async (studentsData) => {
  const layout = sharp('assets/vignettes/vignette.jpg');
  const { width: layoutWidth, height: layoutHeight } = await layout.metadata();

  const colsTeacher = 3;
  const colsStudent = 5;
  const rows = 4;

  const blockWidthTeacher = Math.floor((layoutWidth - (CUT_OFF * 2) - (PADDING * 4) - (INNER_PADDING * ((colsTeacher - 1) * 2))) / (colsTeacher * 2));
  const blockWidthStudent = Math.floor((layoutWidth - (CUT_OFF * 2) - (PADDING * 4) - (INNER_PADDING * ((colsStudent - 1) * 2))) / (colsStudent * 2));
  const blockHeight = Math.floor((layoutHeight - (CUT_OFF * 2) - (PADDING * 2) - (INNER_PADDING * 4)) / 4);

  let row = 0;
  let col = 0;
  let teachersDone = false;

  // Предварительно вычисляем позиции для каждого студента
  const positions = studentsData.map((student) => {
    const isTeacher = student.isTeacher;

    if (!isTeacher && !teachersDone) {
      row += 2; // Пропускаем 2 строки после учителей
      col = 0;
      teachersDone = true;
    }

    const blockWidth = isTeacher ? blockWidthTeacher : blockWidthStudent;
    const isRight = row >= rows;
    const leftCoordinate = (isRight ? layoutWidth / 2 : 0) + CUT_OFF + PADDING + col * blockWidth + INNER_PADDING * col;
    const topCoordinate = CUT_OFF + PADDING + (row % rows) * blockHeight + INNER_PADDING * (row % rows);

    const currentPosition = { left: leftCoordinate, top: topCoordinate, blockWidth };

    // Увеличиваем счетчики строки и колонки
    if (col >= colsStudent - 1) {
      row++;
      col = 0;
    } else {
      col++;
    }

    return currentPosition;
  });

  // Создаем массив промисов для обработки изображений
  const promises = studentsData.map(async (student, index) => {
    const { portrait, firstName, secondName, isTeacher } = student;
    await fs.promises.access(portrait, fs.constants.F_OK);

    const blockWidth = isTeacher ? blockWidthTeacher : blockWidthStudent;
    const blockHeightResized = blockWidth / 2 * 3;

    const resizedPhoto = sharp(portrait).resize(blockWidth, blockHeightResized);
    const photoBuffer = await resizedPhoto.toBuffer();

    const textImg = await addText({
      height: Math.floor(blockWidth / 2 * 1),
      width: blockWidth,
      firstName,
      secondName,
    });

    // Берем заранее вычисленные координаты
    const { left, top } = positions[index];

    return [
      { input: photoBuffer, left, top },
      { input: textImg, left, top: top + blockHeightResized }
    ];
  });

  // Ждем завершения всех промисов
  const results = await Promise.all(promises);

  // Извлекаем данные для компоновки
  const dataToComposite = results.flat();

  // Компонуем результат в файл
  await layout.composite(dataToComposite).toFile('result/vignette.jpg');
};
