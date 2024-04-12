import { promises } from 'fs';

export const createStudentFolder = async (studentFolderPath: string) => {
  try {
    await promises.mkdir(studentFolderPath, { recursive: true });
    console.log(`${studentFolderPath} folder created successfully!`);
  } catch (err) {
    console.error('Error creating student folder:', err);
  }
};
