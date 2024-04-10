import { Sharp } from "sharp";
import { CUT_OFF, PADDINGS } from "../constants.js";
import { SIZE_TYPES } from "./types.js";

export const resizePhoto = async (photo: Sharp, sizeType: SIZE_TYPES, layoutWidth: number, layoutHeight: number, order: number) => {
  let resizedPhoto;
  let updatedWidth;
  let updatedHeight;
  const { xPadding, yPadding, innerPadding } = PADDINGS[sizeType]
  const doubleYPadding = yPadding * 2
  const doubleXPadding = xPadding * 2;
console.log('sizeType', sizeType)
  switch (sizeType) {
    case SIZE_TYPES.HALF: {
      updatedWidth = layoutWidth.getHalf()
      updatedHeight = layoutHeight
      resizedPhoto = await photo.resize(updatedWidth, updatedHeight).sharpen()
      break;
    }
    case SIZE_TYPES.THREE_QUARTERS: {
      if (innerPadding) {  
        updatedWidth = Math.round((layoutWidth - (CUT_OFF * 2) - xPadding - innerPadding) * 0.80 + CUT_OFF)
      } else {
        console.log('Inner padding is not defined for' + ' ' + sizeType)
      }
      updatedHeight = layoutHeight.minusMargins() - doubleYPadding;
      resizedPhoto = await photo.resize(updatedWidth, updatedHeight).sharpen()
      break;
    }
    case SIZE_TYPES.HALF_CUTTED: {
      updatedWidth = layoutWidth.getHalf().minusMargins() - doubleXPadding;
      updatedHeight = layoutHeight.minusMargins() - doubleYPadding;
      resizedPhoto = await photo.resize(updatedWidth, updatedHeight).sharpen({ sigma: 1 });
      break;
    }
    
    case SIZE_TYPES.THREE_HORISONTAL_HALF: {
      updatedWidth = Math.round(layoutWidth.getHalf().minusMargins()) - (doubleXPadding);
      updatedHeight = Math.round((layoutHeight.minusMargins() - (doubleYPadding * 2)) / 3);
      resizedPhoto = await photo.resize(updatedWidth, updatedHeight).sharpen({ sigma: 1 })
      break;
    }
    case SIZE_TYPES.FOUR_HORISONTAL_FULL: {
      updatedWidth = Math.round(layoutWidth.getHalf().minusMargins()) - xPadding;
      if (innerPadding) {

        updatedHeight = Math.round((layoutHeight.minusMargins() - (doubleYPadding) - innerPadding) / 2);
      } else {
        console.log('Inner padding is not defined for' + ' ' + sizeType)
      }
      resizedPhoto = await photo.resize(updatedWidth, updatedHeight).sharpen({ sigma: 1 })
      break;
    }
    case SIZE_TYPES.TWO_VERTICAL_ONE_HORISONTAL_HALF: {
      if (order === 1 || order === 2) {
        if (innerPadding) {

          updatedWidth = Math.round((layoutWidth.getHalf().minusMargin() - doubleXPadding - innerPadding) / 2 );
          updatedHeight = Math.round((layoutHeight.minusMargins() - (doubleYPadding) - innerPadding) / 2);
        }  else {
          console.log('Inner padding is not defined for' + ' ' + sizeType)
        }
        resizedPhoto = await photo.resize(updatedWidth, updatedHeight).sharpen({ sigma: 1 })
      }
      
      if (order === 3) {
        updatedWidth = Math.round(layoutWidth.getHalf().minusMargin()) - doubleXPadding ;
        if (innerPadding) {

          updatedHeight = Math.round((layoutHeight.minusMargins() - (doubleYPadding) - innerPadding) / 2);
        } else {
          console.log('Inner padding is not defined for' + ' ' + sizeType)
        }
        resizedPhoto = await photo.resize(updatedWidth, updatedHeight).sharpen({ sigma: 1 });
      }
      break
    }
    case SIZE_TYPES.TWO_HORISONTAL_HALF: {
      updatedWidth = Math.round(layoutWidth.getHalf().minusMargin()) - doubleXPadding;
      if (innerPadding) {
        updatedHeight = Math.round((layoutHeight.minusMargins() - (doubleYPadding) - innerPadding) / 2);
      } else {
        console.log('Inner padding is not defined for' + ' ' + sizeType)
      }
      resizedPhoto = await photo.resize(updatedWidth, updatedHeight).sharpen({ sigma: 1 })
      break
    }
    case SIZE_TYPES.FOUR_VERTICAL_HALF: {
      if (innerPadding) {

        updatedWidth = Math.round((layoutWidth.getHalf().minusMargin() - doubleXPadding - innerPadding) / 2 );
        updatedHeight = Math.round((layoutHeight.minusMargins() - (doubleYPadding) - innerPadding) / 2);
      } else {
        console.log('Inner padding is not defined for' + ' ' + sizeType)
      }
      resizedPhoto = await photo.resize(updatedWidth, updatedHeight).sharpen({ sigma: 1 })
      break
    }
    case SIZE_TYPES.TWO_VERTICAL_CUSTOM: {
      if (innerPadding) {

        updatedWidth = Math.round((layoutWidth - (CUT_OFF * 2) - xPadding - innerPadding) * 0.20)
        updatedHeight = Math.round((layoutHeight.minusMargins() - (doubleYPadding) - innerPadding) / 2);
      } else {
        console.log('Inner padding is not defined for' + ' ' + sizeType)
      }
      resizedPhoto = await photo.resize(updatedWidth, updatedHeight).sharpen({ sigma: 1 })
      break
    }
    case SIZE_TYPES.COVER: {
      updatedWidth = 1359;
      updatedHeight = 2040;
      resizedPhoto = await photo.resize(updatedWidth, updatedHeight).sharpen({ sigma: 1 })
      break
    }

    default:
      resizedPhoto = photo
      break;
  }

  return { resizedPhoto, updatedWidth, updatedHeight };
};