import { ALBUM_NAME, DIRECTION, LAYOUT_TYPE, PaddingsData, SIZE_TYPE } from "./impose/types";

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

export const ALBUM_NAMES_DATA = {
  [ALBUM_NAME.OUR_KINDERGARTEN]: {
    name: ALBUM_NAME.OUR_KINDERGARTEN,
    layoutsData: {
      [LAYOUT_TYPE.COVER]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/ourKingergarten/layouts/`,
        step: 12,
        decorations: [
          {
            name: 'sun.png',
            path: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/ourKingergarten/decorations/`,
            offsets: {
              left: 2922,
              top: 1550,
            }
          },
          {
            name: 'frame.png',
            path: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/ourKingergarten/decorations/`,
            offsets: {
              left: 3126,
              top: 718,
            }
          },
        ] 
      }
    }
  },
}


export const LAYOUT_TYPE_DIRECTION_MAPPING = {
  [LAYOUT_TYPE.COVER]: [DIRECTION.V],
  [LAYOUT_TYPE.FULL]: [DIRECTION.H],
  [LAYOUT_TYPE.F1C1]: [DIRECTION.V, DIRECTION.V],
  [LAYOUT_TYPE.F1H3]: [DIRECTION.V, DIRECTION.H, DIRECTION.H, DIRECTION.H],
  [LAYOUT_TYPE.H4]: [DIRECTION.H, DIRECTION.H, DIRECTION.H, DIRECTION.H],
  [LAYOUT_TYPE.F1V2H1]: [DIRECTION.V, DIRECTION.V, DIRECTION.V, DIRECTION.H], 
  [LAYOUT_TYPE.F1H2]: [DIRECTION.V, DIRECTION.H, DIRECTION.H], 
  [LAYOUT_TYPE.F1V4]: [DIRECTION.V, DIRECTION.V, DIRECTION.V, DIRECTION.V, DIRECTION.V],
  [LAYOUT_TYPE.XXLF1V2]: [DIRECTION.H, DIRECTION.V, DIRECTION.V],
  [LAYOUT_TYPE.VIGNETTE]: [DIRECTION.V],
}


export const LAYOUT_TYPE_MAPPING = {
  FULL: [SIZE_TYPE.FULL],
  COVER: [SIZE_TYPE.COVER],
  F1C1: [SIZE_TYPE.HALF, SIZE_TYPE.HALF_CUTTED],
  F1H3: [SIZE_TYPE.HALF, SIZE_TYPE.THREE_HORISONTAL_HALF, SIZE_TYPE.THREE_HORISONTAL_HALF, SIZE_TYPE.THREE_HORISONTAL_HALF],
  H4: [SIZE_TYPE.FOUR_HORISONTAL_FULL, SIZE_TYPE.FOUR_HORISONTAL_FULL, SIZE_TYPE.FOUR_HORISONTAL_FULL, SIZE_TYPE.FOUR_HORISONTAL_FULL],
  F1V2H1: [SIZE_TYPE.HALF, SIZE_TYPE.TWO_VERTICAL_ONE_HORISONTAL_HALF, SIZE_TYPE.TWO_VERTICAL_ONE_HORISONTAL_HALF, SIZE_TYPE.TWO_VERTICAL_ONE_HORISONTAL_HALF],
  F1H2: [SIZE_TYPE.HALF, SIZE_TYPE.TWO_HORISONTAL_HALF, SIZE_TYPE.TWO_HORISONTAL_HALF],
  F1V4: [SIZE_TYPE.HALF, SIZE_TYPE.FOUR_VERTICAL_HALF, SIZE_TYPE.FOUR_VERTICAL_HALF, SIZE_TYPE.FOUR_VERTICAL_HALF,SIZE_TYPE.FOUR_VERTICAL_HALF,], 
  XXLF1V2: [SIZE_TYPE.THREE_QUARTERS, SIZE_TYPE.TWO_VERTICAL_CUSTOM, SIZE_TYPE.TWO_VERTICAL_CUSTOM],
  VIGNETTE: [SIZE_TYPE.FULL],
}

export const PADDINGS: PaddingsData = {
  [SIZE_TYPE.HALF]: {
    xPadding: 0,
    yPadding: 0,
  },
  [SIZE_TYPE.HALF_CUTTED]: {
    xPadding: 186,
    yPadding: 186,
  },
  [SIZE_TYPE.THREE_QUARTERS]: {
    xPadding: 186,
    yPadding: 186,
    innerPadding: 50
  },
  [SIZE_TYPE.THREE_HORISONTAL_HALF]: {
    xPadding: 433,
    yPadding: 83.5,
  },
  [SIZE_TYPE.FOUR_HORISONTAL_FULL]: {
    xPadding: 186,
    yPadding: 186,
    innerPadding: 50
  },
  [SIZE_TYPE.TWO_VERTICAL_ONE_HORISONTAL_HALF]: {
    xPadding: 186,
    yPadding: 186,
    innerPadding: 50
  },
  [SIZE_TYPE.TWO_HORISONTAL_HALF]: {
    xPadding: 186,
    yPadding: 186,
    innerPadding: 50
  },
  [SIZE_TYPE.FOUR_VERTICAL_HALF]: {
    xPadding: 186,
    yPadding: 186,
    innerPadding: 50
  },
  [SIZE_TYPE.TWO_VERTICAL_CUSTOM]: {
    xPadding: 186,
    yPadding: 186,
    innerPadding: 50
  },
  [SIZE_TYPE.COVER]: {
    xPadding: 3244,
    yPadding: 777,
    innerPadding: 50
  },
  [SIZE_TYPE.FULL]: {
    xPadding: 0,
    yPadding: 0,
  }
}