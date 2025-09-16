import fs from 'fs';

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
