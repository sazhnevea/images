import { promises, constants } from 'fs';
import { getImageName } from "../common/common.js";
import { DATA_FOLDER_NAME, RESULT, RETOUCH_FOLDER_NAME, SOURCE_SORT_FOLDER_NAME } from "../constants.js";

export const copyPhotos = async (photosList) => {
  for (const photoNumber of photosList) {
    const photoFixedName = getImageName(photoNumber);
    const sourcePath = `${DATA_FOLDER_NAME}/${SOURCE_SORT_FOLDER_NAME}/${photoFixedName}`;
    const destinationPath = `${RESULT}/${RETOUCH_FOLDER_NAME}/${photoFixedName}`;
    try {
      await promises.access(sourcePath, constants.F_OK);
      await promises.copyFile(sourcePath, destinationPath);
      console.info(`Фото скопировано: ${photoFixedName}`);
    } catch (error) {
      if (error.code === 'ENOENT') {
        console.warn(`Фото не найдено: ${sourcePath}`);
      } else {
        console.error(`Ошибка при копировании фотографии: ${sourcePath}`, error);
      }
    }
  }
}
