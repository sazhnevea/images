import { ALBUM_NAMES, AlbumData, Direction, LAYOUT_TYPE, LayoutTypeMapping, Padding, SIZE_CODES, SIZE_TYPES } from "./impose/types";

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

export const ALBUM_DATA: AlbumData = {
  [ALBUM_NAMES.ourKingergarten]: {
    name: ALBUM_NAMES.ourKingergarten,
    layoutsData: {
      [LAYOUT_TYPE.COVER]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/ourKingergarten/${LAYOUT_TYPE.COVER}/`,
        step: 12,
        decoration: {
          name: 'decoration.png',
          path: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/ourKingergarten/${LAYOUT_TYPE.COVER}/`,
          offsets: {
            left: 2922,
            top: 718,
          }
        },
      },
      [LAYOUT_TYPE.F1C1]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/ourKingergarten/${LAYOUT_TYPE.F1C1}/`
      },
      [LAYOUT_TYPE.F1H3]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/ourKingergarten/${LAYOUT_TYPE.F1H3}/`,
      },
      [LAYOUT_TYPE.H4]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/ourKingergarten/${LAYOUT_TYPE.H4}/`,
      },
      [LAYOUT_TYPE.F1V2H1]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/ourKingergarten/${LAYOUT_TYPE.F1V2H1}/`,
      },
      [LAYOUT_TYPE.F1H2]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/ourKingergarten/${LAYOUT_TYPE.F1H2}/`,
      },
      [LAYOUT_TYPE.F1V4]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/ourKingergarten/${LAYOUT_TYPE.F1V4}/`,
      },
      [LAYOUT_TYPE.XXLF1V2]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/ourKingergarten/${LAYOUT_TYPE.XXLF1V2}/`,
      },
      [LAYOUT_TYPE.VIGNETTE]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/ourKingergarten/${LAYOUT_TYPE.VIGNETTE}/`,
      },
      [LAYOUT_TYPE.FULL]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/ourKingergarten/${LAYOUT_TYPE.FULL}/`,
      },
    }
  },
}

export const LAYOUT_TYPE_MAPPING: LayoutTypeMapping = {
  [SIZE_CODES.FULL]: [SIZE_TYPES.FULL],
  [SIZE_CODES.COVER]: [SIZE_TYPES.COVER],
  [SIZE_CODES.F1C1]: [SIZE_TYPES.HALF, SIZE_TYPES.HALF_CUTTED],
  [SIZE_CODES.F1H3]: [SIZE_TYPES.HALF, SIZE_TYPES.THREE_HORISONTAL_HALF, SIZE_TYPES.THREE_HORISONTAL_HALF, SIZE_TYPES.THREE_HORISONTAL_HALF],
  [SIZE_CODES.H4]: [SIZE_TYPES.FOUR_HORISONTAL_FULL, SIZE_TYPES.FOUR_HORISONTAL_FULL, SIZE_TYPES.FOUR_HORISONTAL_FULL, SIZE_TYPES.FOUR_HORISONTAL_FULL],
  [SIZE_CODES.F1V2H1]: [SIZE_TYPES.HALF, SIZE_TYPES.TWO_VERTICAL_ONE_HORISONTAL_HALF, SIZE_TYPES.TWO_VERTICAL_ONE_HORISONTAL_HALF, SIZE_TYPES.TWO_VERTICAL_ONE_HORISONTAL_HALF],
  [SIZE_CODES.F1H2]: [SIZE_TYPES.HALF, SIZE_TYPES.TWO_HORISONTAL_HALF, SIZE_TYPES.TWO_HORISONTAL_HALF],
  [SIZE_CODES.F1V4]: [SIZE_TYPES.HALF, SIZE_TYPES.FOUR_VERTICAL_HALF, SIZE_TYPES.FOUR_VERTICAL_HALF, SIZE_TYPES.FOUR_VERTICAL_HALF,SIZE_TYPES.FOUR_VERTICAL_HALF,], 
  [SIZE_CODES.XXLF1V2]: [SIZE_TYPES.THREE_QUARTERS, SIZE_TYPES.TWO_VERTICAL_CUSTOM, SIZE_TYPES.TWO_VERTICAL_CUSTOM],
  [SIZE_CODES.VIGNETTE]: [SIZE_TYPES.FULL],
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
  [SIZE_TYPES.VIGNETTE]: {
    xPadding: 0,
    yPadding: 0,
  },
}