import { CUT_OFF, PADDINGS } from "../constants";
import { SIZE_TYPE } from "./types";
import { Sharp } from 'sharp';




export const resizePhoto = async (photo: Sharp, sizeType: SIZE_TYPE, layoutWidth: number, layoutHeight: number, order: number) => {
  let resizedPhoto: Sharp = photo;
  let updatedWidth: number = 0;
  let updatedHeight: number = 0;
  const { xPadding, yPadding, innerPadding } = PADDINGS[sizeType]
  const doubleYPadding = yPadding * 2
  const doubleXPadding = xPadding * 2;

  switch (sizeType) {
    case SIZE_TYPE.HALF: {
      updatedWidth = layoutWidth.getHalf()
      updatedHeight = layoutHeight
      resizedPhoto = photo.resize(updatedWidth, updatedHeight).sharpen()
      break;
    }
    case SIZE_TYPE.THREE_QUARTERS: {
      if (innerPadding) {
        updatedWidth = Math.round((layoutWidth - (CUT_OFF * 2) - xPadding - innerPadding) * 0.80 + CUT_OFF)        
      } else {
        console.log('innerPadding in not defined!')
      }
      updatedHeight = layoutHeight.minusMargins() - doubleYPadding;
      resizedPhoto = photo.resize(updatedWidth, updatedHeight).sharpen()
      break;
    }
    case SIZE_TYPE.HALF_CUTTED: {
      updatedWidth = layoutWidth.getHalf().minusMargins() - doubleXPadding;
      updatedHeight = layoutHeight.minusMargins() - doubleYPadding;
      resizedPhoto = photo.resize(updatedWidth, updatedHeight).sharpen({ sigma: 1 });
      break;
    }
    
    case SIZE_TYPE.THREE_HORISONTAL_HALF: {
      updatedWidth = Math.round(layoutWidth.getHalf().minusMargins()) - (doubleXPadding);
      updatedHeight = Math.round((layoutHeight.minusMargins() - (doubleYPadding * 2)) / 3);
      resizedPhoto = photo.resize(updatedWidth, updatedHeight).sharpen({ sigma: 1 })
      break;
    }
    case SIZE_TYPE.FOUR_HORISONTAL_FULL: {
      updatedWidth = Math.round(layoutWidth.getHalf().minusMargins()) - xPadding;
      if (innerPadding) {
        updatedHeight = Math.round((layoutHeight.minusMargins() - (doubleYPadding) - innerPadding) / 2);
      } else {
        console.log('innerPadding in not defined!')
      }
      resizedPhoto = photo.resize(updatedWidth, updatedHeight).sharpen({ sigma: 1 })
      break;
    }
    case SIZE_TYPE.TWO_VERTICAL_ONE_HORISONTAL_HALF: {
      if (order === 1 || order === 2) {
        if (innerPadding) {
          updatedWidth = Math.round((layoutWidth.getHalf().minusMargin() - doubleXPadding - innerPadding) / 2 );
          updatedHeight = Math.round((layoutHeight.minusMargins() - (doubleYPadding) - innerPadding) / 2);
        } else {
          console.log('innerPadding in not defined!')
        }
        resizedPhoto = photo.resize(updatedWidth, updatedHeight).sharpen({ sigma: 1 })
      }
      
      if (order === 3) {
        updatedWidth = Math.round(layoutWidth.getHalf().minusMargin()) - doubleXPadding ;
        if (innerPadding) {
          updatedHeight = Math.round((layoutHeight.minusMargins() - (doubleYPadding) - innerPadding) / 2);
        } else {
          console.log('innerPadding in not defined!')
        }
        resizedPhoto = photo.resize(updatedWidth, updatedHeight).sharpen({ sigma: 1 });
      }
      break
    }
    case SIZE_TYPE.TWO_HORISONTAL_HALF: {
      updatedWidth = Math.round(layoutWidth.getHalf().minusMargin()) - doubleXPadding ;
      if (innerPadding) {
        updatedHeight = Math.round((layoutHeight.minusMargins() - (doubleYPadding) - innerPadding) / 2);
      } else {
        console.log('innerPadding in not defined!')
      }
      resizedPhoto = photo.resize(updatedWidth, updatedHeight).sharpen({ sigma: 1 })
      break
    }
    case SIZE_TYPE.FOUR_VERTICAL_HALF: {
      if (innerPadding) {
        updatedWidth = Math.round((layoutWidth.getHalf().minusMargin() - doubleXPadding - innerPadding) / 2 );
        updatedHeight = Math.round((layoutHeight.minusMargins() - (doubleYPadding) - innerPadding) / 2);
      } else {
        console.log('innerPadding in not defined!')
      }
      resizedPhoto = photo.resize(updatedWidth, updatedHeight).sharpen({ sigma: 1 })
      break
    }
    case SIZE_TYPE.TWO_VERTICAL_CUSTOM: {
      if (innerPadding) {
        updatedWidth = Math.round((layoutWidth - (CUT_OFF * 2) - xPadding - innerPadding) * 0.20)
        updatedHeight = Math.round((layoutHeight.minusMargins() - (doubleYPadding) - innerPadding) / 2);
      } else {
        console.log('innerPadding in not defined!')
      }
      resizedPhoto = photo.resize(updatedWidth, updatedHeight).sharpen({ sigma: 1 })
      break
    }
    case SIZE_TYPE.COVER: {
      updatedWidth = 1357;
      updatedHeight = 1905;
      resizedPhoto = photo.resize(updatedWidth, updatedHeight).sharpen({ sigma: 1 })
      break
    }

    default:
      resizedPhoto = photo
      break;
  }

  return { resizedPhoto, updatedWidth, updatedHeight };
};