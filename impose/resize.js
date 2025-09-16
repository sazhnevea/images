import { SIZES, SIZE_TYPES } from "../constants.js";
import { roundToNearestEven } from "./helper.js";

export const resizePhoto = ({
  sizeType,
  layoutWidth,
  layoutHeight,
  order,
}) => {
  let updatedWidth;
  let updatedHeight;
  const { width, height, innerPadding } = SIZES[sizeType]

  switch (sizeType) {
    case SIZE_TYPES.HALF: {
      updatedWidth = Math.round(layoutWidth * width);
      updatedHeight = Math.round(layoutHeight  * height);
      break;
    }
    case SIZE_TYPES.THREE_QUARTERS: {
      // отнимаем только одну линию отреза слева, т.к. фото встает прям на нее в координату 0
      updatedWidth = Math.round(layoutWidth * width);
      updatedHeight = Math.round(layoutHeight.minusCutOffs() * height);
      break;
    }
    case SIZE_TYPES.HALF_CUTTED: {
      updatedWidth = Math.round(layoutWidth.minusCutOffs() * width);
      updatedHeight = Math.round(layoutHeight.minusCutOffs() * height);
      break;
    }
    
    case SIZE_TYPES.THREE_HORISONTAL_HALF: {
      updatedWidth = Math.round(layoutWidth.minusCutOffs() * width);
      updatedHeight = Math.round(layoutHeight.minusCutOffs() * height);
      break;
    }
    case SIZE_TYPES.FOUR_HORISONTAL_FULL: {
      updatedWidth = Math.round(layoutWidth.minusCutOffs() * width);
      updatedHeight = Math.round(layoutHeight.minusCutOffs() * height);
      break;
    }
    case SIZE_TYPES.TWO_VERTICAL_ONE_HORISONTAL_HALF: {
      if (order === 1 || order === 2) {
        updatedWidth = Math.round(layoutWidth.minusCutOffs() * width);
        updatedHeight = Math.round(layoutHeight.minusCutOffs() * height);
      }
      if (order === 3) {
        updatedWidth = Math.round(layoutWidth.minusCutOffs() * width * 2 + innerPadding);
        updatedHeight = Math.round(layoutHeight.minusCutOffs() * height);  
      }

      break
    }
    case SIZE_TYPES.TWO_HORISONTAL_HALF: {
      updatedWidth = Math.round(layoutWidth.minusCutOffs() * width);
      updatedHeight = Math.round(layoutHeight.minusCutOffs() * height);
      break
    }
    case SIZE_TYPES.FOUR_VERTICAL_HALF: {
      updatedWidth = Math.round(layoutWidth.minusCutOffs() * width);
      updatedHeight = Math.round(layoutHeight.minusCutOffs() * height);
      break
    }
    case SIZE_TYPES.TWO_VERTICAL_CUSTOM: {
      updatedWidth = Math.round(layoutWidth.minusCutOffs() * width);
      updatedHeight = Math.round(layoutHeight.minusCutOffs() * height);
      break
    }
    case SIZE_TYPES.TWO_VERTICAL_RIGHT_CENTER: {
      if (order === 1 || order === 2) {
        updatedWidth = Math.round(layoutWidth.minusCutOffs() * width);
        updatedHeight = Math.round(layoutHeight.minusCutOffs() * height);
      }
      break
    }
  }
  return { 
    updatedWidth: roundToNearestEven(updatedWidth),
    updatedHeight: roundToNearestEven(updatedHeight)
  };
};