import { SIZES, SIZE_TYPES } from "../constants.js";
import { calcOffsets } from "./helper.js";

export const getOffsets = ({
  photoWidth,
  photoHeight,
  sizeType,
  layoutWidth,
  layoutHeight,
  order,
}) => {
  let leftOffset = 0;
  let topOffset = 0;
  const { innerPadding = 0, width } = SIZES[sizeType]

  switch (sizeType) {
    case SIZE_TYPES.HALF: {
      const { left, top } = calcOffsets({
        baseX: 0,
        baseY: 0,
        availableWidth: layoutWidth * width,
        availableHeight: layoutHeight,
        imagesX: 1,
        imagesY: 1,
        photoWidth,
        photoHeight,
        innerPadding,
      });
      leftOffset = left
      topOffset = top
      break;
    }
    case SIZE_TYPES.THREE_QUARTERS: {

      const { left, top } = calcOffsets({
        baseX: 0,
        baseY: 0,
        availableWidth: layoutWidth * width,
        availableHeight: layoutHeight,
        imagesX: 1,
        imagesY: 1,
        photoWidth,
        photoHeight,
        innerPadding,
      });

      leftOffset = left; 
      topOffset = top
      break;
    }
    case SIZE_TYPES.HALF_CUTTED: {
      const { left, top } = calcOffsets({
        baseX: layoutWidth.getHalf(),
        baseY: 0,
        availableWidth: layoutWidth.getHalf().minusCutOff(),
        availableHeight: layoutHeight,
        imagesX: 1,
        imagesY: 1,
        photoWidth,
        photoHeight,
        innerPadding,
      });

      leftOffset = left
      topOffset = top
      break;
    }
    case SIZE_TYPES.THREE_HORISONTAL_HALF: {
      const { left, top } = calcOffsets({
        baseX: layoutWidth.getHalf(),
        baseY: 0,
        availableWidth: layoutWidth.getHalf().minusCutOff(),
        availableHeight: layoutHeight,
        imagesX: 1,
        imagesY: 3,
        photoWidth,
        photoHeight,
        innerPadding,
      });

      topOffset = top
      leftOffset = left

      if (order >= 2) {
        topOffset = topOffset + photoHeight + innerPadding;
      }
      if (order >= 3) {
        topOffset = topOffset + photoHeight + innerPadding;
      }
      break;
    }
    case SIZE_TYPES.FOUR_HORISONTAL_FULL: {
      const { left, top } = calcOffsets({
        baseX: 0,
        baseY: 0,
        availableWidth: layoutWidth,
        availableHeight: layoutHeight,
        imagesX: 2,
        imagesY: 2,
        photoWidth,
        photoHeight,
        innerPadding,
      });
    
      leftOffset = left;
      topOffset = top;
    
      if (order === 2 || order === 3) {
        topOffset += photoHeight + innerPadding;
      }
      if (order === 1 || order === 3) {
        leftOffset += photoWidth + innerPadding;
      }
  
      break;
    }
    case SIZE_TYPES.TWO_VERTICAL_ONE_HORISONTAL_HALF: {
      const { left, top } = calcOffsets({
        baseX: layoutWidth.getHalf(),
        baseY: 0,
        availableWidth: layoutWidth.getHalf().minusCutOff(),
        availableHeight: layoutHeight,
        imagesX: order === 3 ? 1 : 2,
        imagesY: 2,
        photoWidth,
        photoHeight,
        innerPadding,
      });

      leftOffset = left;
      topOffset = top;
      
      if (order === 2) {
        leftOffset = leftOffset + photoWidth + innerPadding;
      }
      
      if (order === 3) {
        topOffset = topOffset + photoHeight + innerPadding;
      }
      break
    }
    case SIZE_TYPES.TWO_HORISONTAL_HALF: {
      const { left, top } = calcOffsets({
        baseX: layoutWidth.getHalf(),
        baseY: 0,
        availableWidth: layoutWidth.getHalf().minusCutOff(),
        availableHeight: layoutHeight,
        imagesX: 1,
        imagesY: 2,
        photoWidth,
        photoHeight,
        innerPadding,
      });

      leftOffset = left
      topOffset = top
      
      if (order === 2) {
        topOffset = topOffset + photoHeight + innerPadding;
      }
      
      break
    }
    case SIZE_TYPES.FOUR_VERTICAL_HALF: {
      const { left, top } = calcOffsets({
        baseX: layoutWidth.getHalf(),
        baseY: 0,
        availableWidth: layoutWidth.getHalf().minusCutOff(),
        availableHeight: layoutHeight,
        imagesX: 2,
        imagesY: 2,
        photoWidth,
        photoHeight,
        innerPadding,
      });

      leftOffset = left;
      topOffset = top;
      if (order === 2 || order === 4) {
        leftOffset = leftOffset + photoWidth + innerPadding;
      }
      if (order === 3 || order === 4) {
        topOffset = topOffset + photoHeight + innerPadding;
      }
      break
    }
    case SIZE_TYPES.TWO_VERTICAL_CUSTOM: {
      const { left, top } = calcOffsets({
        baseX: Math.round(layoutWidth * SIZES[SIZE_TYPES.THREE_QUARTERS].width),
        baseY: 0,
        availableWidth: layoutWidth.minusCutOff() - (layoutWidth * SIZES[SIZE_TYPES.THREE_QUARTERS].width),
        availableHeight: layoutHeight,
        imagesX: 1,
        imagesY: 2,
        photoWidth,
        photoHeight,
        innerPadding,
      });

      leftOffset = left
      topOffset = top
      
      if (order === 2) {
        topOffset = Math.round(topOffset + photoHeight + innerPadding);
      }
      break
    }
    case SIZE_TYPES.TWO_VERTICAL_RIGHT_CENTER: {

      const { left, top } = calcOffsets({
        baseX: layoutWidth.getHalf(),
        baseY: 0,
        availableWidth: layoutWidth.getHalf().minusCutOff(),
        availableHeight: layoutHeight,
        imagesX: 2,
        imagesY: 1,
        photoWidth,
        photoHeight,
        innerPadding,
        });
      leftOffset = left;
      topOffset = top;

      if (order === 2) {
        leftOffset = leftOffset + photoWidth + innerPadding;
      }
      break
    }
    case SIZE_TYPES.FULL: {
      leftOffset = 0
      topOffset = 0
      break
    }
    default:
      break;
  }
  return { left: leftOffset, top: topOffset };
};