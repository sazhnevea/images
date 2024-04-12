import { CUT_OFF, PADDINGS } from "../constants.js";
import { SIZE_TYPES } from "./types.js";

export const getOffsets = async (updatedWidth: number, updatedHeight: number, sizeType: SIZE_TYPES, layoutWidth: number, layoutHeight: number, order: number, pagesAmount?: number, step?: number) => {
  let leftOffset = 0;
  let topOffset = 0;

  const { xPadding, yPadding, innerPadding } = PADDINGS[sizeType]
  switch (sizeType) {
    case SIZE_TYPES.HALF: {
      leftOffset = 0;
      topOffset = 0;
      break;
    }
    case SIZE_TYPES.THREE_QUARTERS: {
      leftOffset = 0;
      topOffset = topOffset + CUT_OFF + yPadding
      break;
    }
    case SIZE_TYPES.HALF_CUTTED: {
      const leftSpace = layoutWidth.minusMargins().getHalf() - updatedWidth;
      leftOffset = layoutWidth.minusMargin() - updatedWidth - (leftSpace / 2);
      topOffset = topOffset.plusMargin() + yPadding;
      break;
    }
    case SIZE_TYPES.THREE_HORISONTAL_HALF: {
      const leftSpace = layoutWidth.minusMargins().getHalf() - updatedWidth
      leftOffset = layoutWidth.minusMargin() - updatedWidth - (leftSpace / 2);
      topOffset = Math.round(topOffset.plusMargin() + yPadding);
      if (order >= 2) {
        topOffset = Math.round(topOffset + updatedHeight + yPadding)
      }
      if (order >= 3) {
        topOffset = Math.round(topOffset + updatedHeight + yPadding)
      }
      break;
    }
    case SIZE_TYPES.FOUR_HORISONTAL_FULL: {
      if (innerPadding) {
        if (order === 0) {
          leftOffset = layoutWidth.getHalf() - (innerPadding / 2) - updatedWidth;
          topOffset = Math.round(topOffset.plusMargin() + yPadding);
        }

        if (order === 1) {
          leftOffset = layoutWidth.getHalf() - (innerPadding / 2) - updatedWidth;
          topOffset = Math.round(Math.round(topOffset.plusMargin() + yPadding) + updatedHeight + innerPadding)
        }
        if (order === 2) {
          leftOffset = layoutWidth.getHalf() + (innerPadding / 2)
          topOffset = Math.round(topOffset.plusMargin() + yPadding);
        }

        if (order === 3) {
          leftOffset = layoutWidth.getHalf() + (innerPadding / 2)
          topOffset = Math.round(Math.round(topOffset.plusMargin() + yPadding) + updatedHeight + innerPadding)
        }
      } else {
        console.log('Inner padding is not defined for' + ' ' + sizeType)
      }
      break;
    }
    case SIZE_TYPES.TWO_VERTICAL_ONE_HORISONTAL_HALF: {
      if (order === 1) {
        leftOffset = layoutWidth.getHalf() + xPadding;
        topOffset = Math.round(topOffset.plusMargin() + yPadding);
      }
      if (order === 2) {
        if (innerPadding) {
          leftOffset = layoutWidth.getHalf() + xPadding + updatedWidth + innerPadding
        } else {
          console.log('Inner padding is not defined for' + ' ' + sizeType)
        }
        topOffset = Math.round(topOffset.plusMargin() + yPadding);
      }
      if (order === 3) {
        leftOffset = layoutWidth.getHalf() + xPadding
        topOffset = Math.round(layoutHeight.minusMargin() - yPadding - updatedHeight);
      }
      break
    }
    case SIZE_TYPES.TWO_HORISONTAL_HALF: {
      leftOffset = layoutWidth.getHalf() + xPadding
      if (order === 1) {
        topOffset = Math.round(topOffset.plusMargin() + yPadding);
      }
      if (order === 2) {
        if (innerPadding) {

          topOffset = Math.round(topOffset.plusMargin() + yPadding + updatedHeight + innerPadding);
        } else {
          console.log('Inner padding is not defined for' + ' ' + sizeType)
        }
      }
      break
    }
    case SIZE_TYPES.FOUR_VERTICAL_HALF: {
      if (order === 1) {
        leftOffset = layoutWidth.getHalf() + xPadding;
        topOffset = Math.round(topOffset.plusMargin() + yPadding);
      }
      if (order === 2) {
        if (innerPadding) {  
          leftOffset = layoutWidth.getHalf() + xPadding + updatedWidth + innerPadding
        } else {
          console.log('Inner padding is not defined for' + ' ' + sizeType)
        }
        topOffset = Math.round(topOffset.plusMargin() + yPadding);
      }
      if (order === 3) {
        leftOffset = layoutWidth.getHalf() + xPadding
        topOffset = Math.round(layoutHeight.minusMargin() - yPadding - updatedHeight);
      }
      if (order === 4) {
        if (innerPadding) {
          leftOffset = layoutWidth.getHalf() + xPadding + updatedWidth + innerPadding
        } else {
          console.log('Inner padding is not defined for' + ' ' + sizeType)
        }
        topOffset = Math.round(layoutHeight.minusMargin() - yPadding - updatedHeight);
      }
      break
    }
    case SIZE_TYPES.TWO_VERTICAL_CUSTOM: {
      leftOffset = layoutWidth - CUT_OFF - xPadding - updatedWidth;
      if (order === 1) {
        topOffset = Math.round(topOffset.plusMargin() + yPadding);
      }
      if (order === 2) {
        if (innerPadding) {  
          topOffset = Math.round(topOffset.plusMargin() + yPadding + updatedHeight + innerPadding);
        } else {
          console.log('Inner padding is not defined for' + ' ' + sizeType)
        }
      }
      break
    }
    case SIZE_TYPES.TWO_VERTICAL_RIGHT_CENTER: {
      if (order === 1) {
        leftOffset = layoutWidth.getHalf() + xPadding;
        topOffset = Math.round((layoutHeight -updatedHeight) / 2);
      }
      if (order === 2) {
        if (innerPadding) {  
        leftOffset = layoutWidth.getHalf() + xPadding + updatedWidth + innerPadding
        } else {
          console.log('Inner padding is not defined for' + ' ' + sizeType)
        }
        topOffset = Math.round((layoutHeight - updatedHeight) / 2);
      }
      break
    }
    case SIZE_TYPES.COVER: {
      if (pagesAmount && step) {

        leftOffset = CUT_OFF + xPadding + ((pagesAmount - 1) * step);
      } else {
        console.log(`pagesAmount or step is not defined. pagesAmount value is ${pagesAmount}. step value is ${step}`)
      }
      topOffset = Math.round(topOffset.plusMargin() + yPadding - 150);
      break
    }
    default:
      break;
  }

  return { leftOffset, topOffset };
};