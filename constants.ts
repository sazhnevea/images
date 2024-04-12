import { ALBUM_NAMES, AlbumData, Direction, LAYOUT_TYPE, LayoutTypeMapping, Padding, SIZE_TYPES } from "./impose/types";

export const ASSETS_FOLDER_NAME = 'assets';
export const ALBUMS_FOLDER_NAME = 'albums';
export const DATA_FOLDER_NAME = 'data';
export const IMPOSE_FOLDER_NAME = 'верстка';
export const RESULT = 'result';
export const RETOUCH_FOLDER_NAME = 'ретушь';
export const SOURCE_SORT_FOLDER_NAME = 'цветокоррекция';
export const CSVPathImpose = `верстка.csv`
export const CSVPathSort = `сортировка.csv`
export const LAYOUT_PATH = 'assets/layout.jpg'

export const CUT_OFF = 24;

export const ALBUM_NAME_FIELD = 'Название альбома'

export const DIRECTION: Direction = {
  V: 'verical',
  H: 'horisontal',
}

const PHOTO_SIZES_DATA = {
  [SIZE_TYPES.FULL]: {
    width: 4772,
    height: 3472,
  },
  [SIZE_TYPES.HALF]: {
    width: 2386,
    height: 3472,
  },
  [SIZE_TYPES.HALF_CUTTED]: {
    width: 1966,
    height: 3052,
  },
  [SIZE_TYPES.COVER]: {
    width: 1359,
    height: 2040,
  },
  [SIZE_TYPES.TWO_HORISONTAL_HALF]: {
    width: 1990,
    height: 1501,
  },
  [SIZE_TYPES.THREE_HORISONTAL_HALF]: {
    width: 1472,
    height: 1030,
  },
  [SIZE_TYPES.FOUR_HORISONTAL_FULL]: {
    width: 2152,
    height: 1501,
  },
}

export const ALBUM_DATA: AlbumData = {
  [ALBUM_NAMES.ourKingergarten]: {
    name: ALBUM_NAMES.ourKingergarten,
    layouts: {
      [LAYOUT_TYPE.COVER]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/ourKingergarten/${LAYOUT_TYPE.COVER}/`,
        photosSizeDataOrder: [PHOTO_SIZES_DATA[SIZE_TYPES.COVER]],
        step: 12,
        decoration: {
          name: 'decoration.png',
          path: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/ourKingergarten/${LAYOUT_TYPE.COVER}/`,
          offsets: {
            left: 2980,
            top: 568,
          }
        },
      },
      [LAYOUT_TYPE.F1C1]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/ourKingergarten/${LAYOUT_TYPE.F1C1}/`,
        photosSizeDataOrder: [PHOTO_SIZES_DATA[SIZE_TYPES.HALF], PHOTO_SIZES_DATA[SIZE_TYPES.HALF_CUTTED]],
      },
      [LAYOUT_TYPE.F1H3]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/ourKingergarten/${LAYOUT_TYPE.F1H3}/`,
        photosSizeDataOrder: [PHOTO_SIZES_DATA[SIZE_TYPES.HALF], PHOTO_SIZES_DATA[SIZE_TYPES.THREE_HORISONTAL_HALF], PHOTO_SIZES_DATA[SIZE_TYPES.THREE_HORISONTAL_HALF], PHOTO_SIZES_DATA[SIZE_TYPES.THREE_HORISONTAL_HALF]],
      },
      [LAYOUT_TYPE.H4]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/ourKingergarten/${LAYOUT_TYPE.H4}/`,
        photosSizeDataOrder: [PHOTO_SIZES_DATA[SIZE_TYPES.FOUR_HORISONTAL_FULL], PHOTO_SIZES_DATA[SIZE_TYPES.FOUR_HORISONTAL_FULL], PHOTO_SIZES_DATA[SIZE_TYPES.FOUR_HORISONTAL_FULL], PHOTO_SIZES_DATA[SIZE_TYPES.FOUR_HORISONTAL_FULL]],
      },
      [LAYOUT_TYPE.F1V2H1]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/ourKingergarten/${LAYOUT_TYPE.F1V2H1}/`,
        photosSizeDataOrder: [
          PHOTO_SIZES_DATA[SIZE_TYPES.HALF], 
          {
            width: 970,
            height: 1501,
          },
          {
            width: 970,
            height: 1501,
          },
          {
            width: 1990,
            height: 1501,
          },
        ],
      },
      [LAYOUT_TYPE.F1H2]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/ourKingergarten/${LAYOUT_TYPE.F1H2}/`,
        photosSizeDataOrder: [
          PHOTO_SIZES_DATA[SIZE_TYPES.HALF], 
          {
            width: 970,
            height: 1501,
          },
          {
            width: 970,
            height: 1501,
          },
          {
            width: 1990,
            height: 1501,
          },
        ],
      },
      [LAYOUT_TYPE.F1V4]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/ourKingergarten/${LAYOUT_TYPE.F1V4}/`,
        photosSizeDataOrder: [
          PHOTO_SIZES_DATA[SIZE_TYPES.HALF], 
          {
            width: 970,
            height: 1501,
          },
          {
            width: 970,
            height: 1501,
          },
          {
            width: 1990,
            height: 1501,
          },
        ],
      },
      [LAYOUT_TYPE.XXLF1V2]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/ourKingergarten/${LAYOUT_TYPE.XXLF1V2}/`,
        photosSizeDataOrder: [
          PHOTO_SIZES_DATA[SIZE_TYPES.HALF], 
          {
            width: 970,
            height: 1501,
          },
          {
            width: 970,
            height: 1501,
          },
          {
            width: 1990,
            height: 1501,
          },
        ],
      },
      [LAYOUT_TYPE.F1V2]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/ourKingergarten/${LAYOUT_TYPE.F1V2}/`,
        photosSizeDataOrder: [
          PHOTO_SIZES_DATA[SIZE_TYPES.HALF], 
          {
            width: 970,
            height: 1501,
          },
          {
            width: 970,
            height: 1501,
          },
          {
            width: 1990,
            height: 1501,
          },
        ],
      },
      [LAYOUT_TYPE.VIGNETTE]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/ourKingergarten/${LAYOUT_TYPE.VIGNETTE}/`,
        photosSizeDataOrder: [PHOTO_SIZES_DATA[SIZE_TYPES.FULL]],
      },
      [LAYOUT_TYPE.FULL]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/ourKingergarten/${LAYOUT_TYPE.FULL}/`,
        photosSizeDataOrder: [PHOTO_SIZES_DATA[SIZE_TYPES.FULL]],
      },
    }
  },
}

export const LAYOUT_TYPE_SIZES_MAPPING: LayoutTypeMapping = {
  [LAYOUT_TYPE.FULL]: [SIZE_TYPES.FULL],
  [LAYOUT_TYPE.COVER]: [SIZE_TYPES.COVER],
  [LAYOUT_TYPE.F1C1]: [SIZE_TYPES.HALF, SIZE_TYPES.HALF_CUTTED],
  [LAYOUT_TYPE.F1H3]: [SIZE_TYPES.HALF, SIZE_TYPES.THREE_HORISONTAL_HALF, SIZE_TYPES.THREE_HORISONTAL_HALF, SIZE_TYPES.THREE_HORISONTAL_HALF],
  [LAYOUT_TYPE.H4]: [SIZE_TYPES.FOUR_HORISONTAL_FULL, SIZE_TYPES.FOUR_HORISONTAL_FULL, SIZE_TYPES.FOUR_HORISONTAL_FULL, SIZE_TYPES.FOUR_HORISONTAL_FULL],
  [LAYOUT_TYPE.F1V2H1]: [SIZE_TYPES.HALF, SIZE_TYPES.TWO_VERTICAL_ONE_HORISONTAL_HALF, SIZE_TYPES.TWO_VERTICAL_ONE_HORISONTAL_HALF, SIZE_TYPES.TWO_VERTICAL_ONE_HORISONTAL_HALF],
  [LAYOUT_TYPE.F1H2]: [SIZE_TYPES.HALF, SIZE_TYPES.TWO_HORISONTAL_HALF, SIZE_TYPES.TWO_HORISONTAL_HALF],
  [LAYOUT_TYPE.F1V4]: [SIZE_TYPES.HALF, SIZE_TYPES.FOUR_VERTICAL_HALF, SIZE_TYPES.FOUR_VERTICAL_HALF, SIZE_TYPES.FOUR_VERTICAL_HALF,SIZE_TYPES.FOUR_VERTICAL_HALF,], 
  [LAYOUT_TYPE.XXLF1V2]: [SIZE_TYPES.THREE_QUARTERS, SIZE_TYPES.TWO_VERTICAL_CUSTOM, SIZE_TYPES.TWO_VERTICAL_CUSTOM],
  [LAYOUT_TYPE.F1V2]: [SIZE_TYPES.HALF, SIZE_TYPES.TWO_VERTICAL_RIGHT_CENTER, SIZE_TYPES.TWO_VERTICAL_RIGHT_CENTER],
  [LAYOUT_TYPE.VIGNETTE]: [SIZE_TYPES.FULL],
}

export const PADDINGS: Padding = {
  [SIZE_TYPES.HALF]: {
    xPadding: 0,
    yPadding: 0,
  },
  [SIZE_TYPES.HALF_CUTTED]: {
    xPadding: 186,
    yPadding: 186,
  },
  [SIZE_TYPES.THREE_QUARTERS]: {
    xPadding: 186,
    yPadding: 186,
    innerPadding: 50
  },
  [SIZE_TYPES.THREE_HORISONTAL_HALF]: {
    xPadding: 433,
    yPadding: 83.5,
  },
  [SIZE_TYPES.FOUR_HORISONTAL_FULL]: {
    xPadding: 186,
    yPadding: 186,
    innerPadding: 50
  },
  [SIZE_TYPES.TWO_VERTICAL_ONE_HORISONTAL_HALF]: {
    xPadding: 186,
    yPadding: 186,
    innerPadding: 50
  },
  [SIZE_TYPES.TWO_HORISONTAL_HALF]: {
    xPadding: 186,
    yPadding: 186,
    innerPadding: 50
  },
  [SIZE_TYPES.FOUR_VERTICAL_HALF]: {
    xPadding: 186,
    yPadding: 186,
    innerPadding: 50
  },
  [SIZE_TYPES.TWO_VERTICAL_CUSTOM]: {
    xPadding: 186,
    yPadding: 186,
    innerPadding: 50
  },
  [SIZE_TYPES.COVER]: {
    xPadding: 3244,
    yPadding: 777,
    innerPadding: 50
  },
  [SIZE_TYPES.FULL]: {
    xPadding: 0,
    yPadding: 0,
  },
  [SIZE_TYPES.TWO_VERTICAL_RIGHT_CENTER]: {
    xPadding: 186,
    yPadding: 186,
    innerPadding: 50
  },
  [SIZE_TYPES.VIGNETTE]: {
    xPadding: 0,
    yPadding: 0,
  },
}