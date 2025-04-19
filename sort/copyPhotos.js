import { promises } from 'fs';
import { getImageName } from "../common/common.js";
import { DATA_FOLDER_NAME, RESULT, FILES_FOLDER } from "../constants.js";

export const copyPhotos = async (photosList) => {
  for (const photoNumber of photosList) {
    try {
      const photoFixedName = await getImageName(photoNumber);
      const sourcePath = `${DATA_FOLDER_NAME}/${FILES_FOLDER}/${photoFixedName}`;
      const destinationPath = `${RESULT}/${photoFixedName}`;
      await promises.copyFile(sourcePath, destinationPath);
      console.info(`Фото скопировано: ${photoFixedName}`);
    } catch (error) {
      if (error.message.startsWith('Файл для')) {
        console.warn(error.message);
      } else {
        console.error(`Ошибка при копировании фотографии: ${photoNumber}`, error);
      }
    }
  }
};
