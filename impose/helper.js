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