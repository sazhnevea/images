import { CUT_OFF, PADDINGS, SIZE_TYPES } from "../constants.js";

export const getOffsets = async (updatedWidth, updatedHeight, sizeType, layoutWidth, layoutHeight, order, pagesAmount, step) => {
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
      break;
    }
    case SIZE_TYPES.TWO_VERTICAL_ONE_HORISONTAL_HALF: {
      if (order === 1) {
        leftOffset = layoutWidth.getHalf() + xPadding;
        topOffset = Math.round(topOffset.plusMargin() + yPadding);
      }
      if (order === 2) {
        leftOffset = layoutWidth.getHalf() + xPadding + updatedWidth + innerPadding
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
        topOffset = Math.round(topOffset.plusMargin() + yPadding + updatedHeight + innerPadding);
      }
      break
    }
    case SIZE_TYPES.FOUR_VERTICAL_HALF: {
      if (order === 1) {
        leftOffset = layoutWidth.getHalf() + xPadding;
        topOffset = Math.round(topOffset.plusMargin() + yPadding);
      }
      if (order === 2) {
        leftOffset = layoutWidth.getHalf() + xPadding + updatedWidth + innerPadding
        topOffset = Math.round(topOffset.plusMargin() + yPadding);
      }
      if (order === 3) {
        leftOffset = layoutWidth.getHalf() + xPadding
        topOffset = Math.round(layoutHeight.minusMargin() - yPadding - updatedHeight);
      }
      if (order === 4) {
        leftOffset = layoutWidth.getHalf() + xPadding + updatedWidth + innerPadding
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
        topOffset = Math.round(topOffset.plusMargin() + yPadding + updatedHeight + innerPadding);
      }
      break
    }
    case SIZE_TYPES.TWO_VERTICAL_RIGHT_CENTER: {
      if (order === 1) {
        leftOffset = layoutWidth.getHalf() + xPadding;
        topOffset = Math.round((layoutHeight -updatedHeight) / 2);
      }
      if (order === 2) {
        leftOffset = layoutWidth.getHalf() + xPadding + updatedWidth + innerPadding
        topOffset = Math.round((layoutHeight - updatedHeight) / 2);
      }
      break
    }
    case SIZE_TYPES.COVER: {
      leftOffset = CUT_OFF + xPadding + ((pagesAmount - 1) * step);
      topOffset = Math.round(topOffset.plusMargin() + yPadding - 150);
      break
    }
    default:
      break;
  }

  return { leftOffset, topOffset };
};