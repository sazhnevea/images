import { CUT_OFF, PADDINGS } from "../constants.js";
import { SIZE_TYPE } from "./types.js";

export const getOffsets = async (updatedWidth: number, updatedHeight: number, sizeType: SIZE_TYPE, layoutWidth: number, layoutHeight: number, order: number, pagesAmount: number, step: number) => {
  let leftOffset = 0;
  let topOffset = 0;

  const { xPadding, yPadding, innerPadding } = PADDINGS[sizeType]
  switch (sizeType) {
    case SIZE_TYPE.HALF: {
      leftOffset = 0;
      topOffset = 0;
      break;
    }
    case SIZE_TYPE.THREE_QUARTERS: {
      leftOffset = 0;
      topOffset = topOffset + CUT_OFF + yPadding
      break;
    }
    case SIZE_TYPE.HALF_CUTTED: {
      const leftSpace = layoutWidth.minusMargins().getHalf() - updatedWidth;
      leftOffset = layoutWidth.minusMargin() - updatedWidth - (leftSpace / 2);
      topOffset = topOffset.plusMargin() + yPadding;
      break;
    }
    case SIZE_TYPE.THREE_HORISONTAL_HALF: {
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
    case SIZE_TYPE.FOUR_HORISONTAL_FULL: {
      if (order === 0) {
        if (innerPadding) {
          leftOffset = layoutWidth.getHalf() - (innerPadding / 2) - updatedWidth;
        } else {
          console.log('innerPadding in not defined!')
        }
        topOffset = Math.round(topOffset.plusMargin() + yPadding);
      }

      if (order === 1) {
        if (innerPadding) {
          leftOffset = layoutWidth.getHalf() - (innerPadding / 2) - updatedWidth;
        } else {
          console.log('innerPadding in not defined!')
        }
        if (innerPadding) {
          topOffset = Math.round(Math.round(topOffset.plusMargin() + yPadding) + updatedHeight + innerPadding)
        } else {
          console.log('innerPadding in not defined!')
        }
      }
      if (order === 2) {
        if (innerPadding) {
          leftOffset = layoutWidth.getHalf() + (innerPadding / 2)
        } else {
          console.log('innerPadding in not defined!')
        }
        topOffset = Math.round(topOffset.plusMargin() + yPadding);
      }

      if (order === 3) {
        if (innerPadding) {
          leftOffset = layoutWidth.getHalf() + (innerPadding / 2)
        } else {
          console.log('innerPadding in not defined!')
        }
        if (innerPadding) {
          topOffset = Math.round(Math.round(topOffset.plusMargin() + yPadding) + updatedHeight + innerPadding)
        } else {
          console.log('innerPadding in not defined!')
        }
      }
      break;
    }
    case SIZE_TYPE.TWO_VERTICAL_ONE_HORISONTAL_HALF: {
      if (order === 1) {
        leftOffset = layoutWidth.getHalf() + xPadding;
        topOffset = Math.round(topOffset.plusMargin() + yPadding);
      }
      if (order === 2) {
        if (innerPadding) {
        leftOffset = layoutWidth.getHalf() + xPadding + updatedWidth + innerPadding;
        } else {
          console.log('innerPadding in not defined!')
        }
        topOffset = Math.round(topOffset.plusMargin() + yPadding);
      }
      if (order === 3) {
        leftOffset = layoutWidth.getHalf() + xPadding
        topOffset = Math.round(layoutHeight.minusMargin() - yPadding - updatedHeight);
      }
      break
    }
    case SIZE_TYPE.TWO_HORISONTAL_HALF: {
      leftOffset = layoutWidth.getHalf() + xPadding
      if (order === 1) {
        topOffset = Math.round(topOffset.plusMargin() + yPadding);
      }
      if (order === 2) {
        if (innerPadding) {
          topOffset = Math.round(topOffset.plusMargin() + yPadding + updatedHeight + innerPadding);
        } else {
          console.log('innerPadding in not defined!')
        }
      }
      break
    }
    case SIZE_TYPE.FOUR_VERTICAL_HALF: {
      if (order === 1) {
        leftOffset = layoutWidth.getHalf() + xPadding;
        topOffset = Math.round(topOffset.plusMargin() + yPadding);
      }
      if (order === 2) {
        if (innerPadding) {
          leftOffset = layoutWidth.getHalf() + xPadding + updatedWidth + innerPadding
        } else {
          console.log('innerPadding in not defined!')
        }
        topOffset = Math.round(topOffset.plusMargin() + yPadding);
      }
      if (order === 3) {
        leftOffset = layoutWidth.getHalf() + xPadding
        topOffset = Math.round(layoutHeight.minusMargin() - yPadding - updatedHeight);
      }
      if (order === 4) {
        if (innerPadding) {
          leftOffset = layoutWidth.getHalf() + xPadding + updatedWidth + innerPadding;
        } else {
          console.log('innerPadding in not defined!')
        }
        topOffset = Math.round(layoutHeight.minusMargin() - yPadding - updatedHeight);
      }

      break
    }
    case SIZE_TYPE.TWO_VERTICAL_CUSTOM: {
      leftOffset = layoutWidth - CUT_OFF - xPadding - updatedWidth;
      if (order === 1) {
        topOffset = Math.round(topOffset.plusMargin() + yPadding);
      }
      if (order === 2) {
        if (innerPadding) {
          topOffset = Math.round(topOffset.plusMargin() + yPadding + updatedHeight + innerPadding);
        } else {
          console.log('innerPadding in not defined!')
        }
      }
      break
    }
    case SIZE_TYPE.COVER: {
      leftOffset = CUT_OFF + xPadding + ((pagesAmount - 1) * step);
      topOffset = Math.round(topOffset.plusMargin() + yPadding);
      break
    }
    default:
      break;
  }

  return { leftOffset, topOffset };
};