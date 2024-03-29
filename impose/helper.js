import fs from 'fs';

export const createStudentFolder = async (studentFolderPath) => {
  try {
    await fs.promises.mkdir(studentFolderPath, { recursive: true });
    console.log(`${studentFolderPath} folder created successfully!`);
  } catch (err) {
    console.error('Error creating student folder:', err);
  }
};
