import fs from 'fs';
import sharp from 'sharp';

export const createStudentFolder = async (studentFolderPath) => {
  try {
    await fs.promises.mkdir(studentFolderPath, { recursive: true });
    console.log(`${studentFolderPath} folder created successfully!`);
  } catch (err) {
    console.error('Error creating student folder:', err);
  }
};

export const roundToNearestEven = (number) => {
  const rounded = Math.round(number);
  return rounded % 2 === 0 ? rounded : rounded - 1;
}

const calcCenteredOffset = (base, available, size, count, innerPadding) => {
  const totalSize = size * count;
  // количество внутренних паддингов всегда на 1 меньше, чем количество изображений в ряду 
  const totalPadding = (count - 1)  * innerPadding;
  const total = totalSize + totalPadding;
  const freeSpace = available - total;
  return Math.floor(base + freeSpace / 2);
}

export const calcOffsets = ({
  baseX = 0,
  baseY = 0,
  availableWidth,
  availableHeight,
  imagesX = 1,
  imagesY = 1,
  photoWidth,
  photoHeight,
  innerPadding,
}) => {
  const left = calcCenteredOffset(baseX, availableWidth, photoWidth, imagesX, innerPadding);
  const top = calcCenteredOffset(baseY, availableHeight, photoHeight, imagesY, innerPadding);
  return { left, top };
}


export const prepareDecoration = async (decoration, photoCoordinateLeft, photoCoordinateTop, layoutWidth, layoutHeight) => {
  if (!decoration) return null;

  const { path, name, offsets } = decoration;
  const decorationImage = sharp(`${path}${name}`);
  const decorMeta = await decorationImage.metadata();

  // исходные координаты смещения
  let left = photoCoordinateLeft + offsets.left;
  let top = photoCoordinateTop + offsets.top;

  // сколько нужно "отрезать" у декора, если он выходит за границы слева/сверху
  let extractLeft = 0;
  let extractTop = 0;

  if (left < 0) {
    extractLeft = -left;
    left = 0;
  }
  if (top < 0) {
    extractTop = -top;
    top = 0;
  }

  // размеры видимой части декора
  let extractWidth = Math.min(decorMeta.width - extractLeft, layoutWidth - left);
  let extractHeight = Math.min(decorMeta.height - extractTop, layoutHeight - top);

  // если декор вообще не попадает в layout — ничего не делаем
  if (extractWidth <= 0 || extractHeight <= 0) {
    return null;
  }

  // вырезаем нужный кусок
  const croppedDecor = await decorationImage
    .extract({
      left: extractLeft,
      top: extractTop,
      width: extractWidth,
      height: extractHeight
    })
    .toBuffer();

  // возвращаем объект для composite
  return {
    input: croppedDecor,
    left,
    top
  };
}