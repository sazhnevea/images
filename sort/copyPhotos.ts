import { promises, constants } from 'fs';
import { getImageName } from "../common/common.js";
import { DATA_FOLDER_NAME, RESULT, RETOUCH_FOLDER_NAME, SOURCE_SORT_FOLDER_NAME } from "../constants.js";

export const copyPhotos = async (photosList: number[]) => {
  const copyPromises = photosList.map(async (photoNumber) => {
    const photoFixedName = getImageName(photoNumber);
    const sourcePath = `${DATA_FOLDER_NAME}/${SOURCE_SORT_FOLDER_NAME}/${photoFixedName}`;
    const destinationPath = `${RESULT}/${RETOUCH_FOLDER_NAME}/${photoFixedName}`;

    try {
      await promises.access(sourcePath, constants.F_OK);
      await promises.copyFile(sourcePath, destinationPath);
      console.info(`Copied photo: ${sourcePath} to ${destinationPath}`);
    } catch (error: any) {
      if (error.code === 'ENOENT') {
        console.warn(`Photo not found: ${sourcePath}`);
      } else {
        console.error(`Error copying photo: ${sourcePath}`, error);
      }
    }
  });

  await Promise.all(copyPromises);
};