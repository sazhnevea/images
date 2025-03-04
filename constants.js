export const ASSETS_FOLDER_NAME = 'assets';
export const ALBUMS_FOLDER_NAME = 'albums';
export const DATA_FOLDER_NAME = 'data';
export const IMPOSE_FOLDER_NAME = 'верстка';
export const RESULT = 'result';
export const RETOUCH_FOLDER_NAME = 'ретушь';
export const VIGNETTE_FOLDER_NAME = 'виньетки';
export const SOURCE_SORT_FOLDER_NAME = 'цветокоррекция';
export const CSVPathImpose = `верстка.csv`
export const CSVPathToVignette = `виньетка.csv`
export const CSVPathSort = `сортировка.csv`
export const LAYOUT_PATH = 'assets/layout.jpg'

export const CUT_OFF = 24;

export const ALBUM_NAME_FIELD = 'Название альбома'

export const ROW_NAMES = {
  albumName: 'Название альбома',
  studentName: 'Имя участника',
  page: 'Разворот'
}

const ALBUM_NAMES = {
  ourKingergarten: 'Наш детский сад'
}

export const DIRECTION = {
  V: 'vertical',
  H: 'horisontal',
}

export const LAYOUT_TYPE = {
  COVER: 'обложка',
  FULL: 'общая',
  F1C1: 'слева 1 всклянь, 1 справа cutted',
  F1H3: 'слева 1 всклянь, 3 справа горизонтали',
  H4: '4 горизонтали',
  F1V2H1: 'слева 1 всклянь, справа 2 вертикали и 1 горизонталь', 
  F1V2: '1 слева всклянь, справа 2 вертикали', 
  F1H2: 'слева 1 всклянь, справа 2 горизонтали', 
  F1V4: '1 слева всклянь, справа 4 вертикали',
  XXLF1V2: 'слева 1 большой, справа 2 вертикали',
  VIGNETTE: 'виньетка',
}

  export const LAYOUT_TYPE_DIRECTION_MAPPING = {
    [LAYOUT_TYPE.COVER]: [DIRECTION.V],
    [LAYOUT_TYPE.FULL]: [DIRECTION.H], // общая
    [LAYOUT_TYPE.F1C1]: [DIRECTION.V, DIRECTION.V], // слева всклянь справа cutted
    [LAYOUT_TYPE.F1H3]: [DIRECTION.V, DIRECTION.H, DIRECTION.H, DIRECTION.H], // слева 1 всклянь, 3 справа горизонтали
    [LAYOUT_TYPE.H4]: [DIRECTION.H, DIRECTION.H, DIRECTION.H, DIRECTION.H], // 4 горизонтали
    [LAYOUT_TYPE.F1V2H1]: [DIRECTION.V, DIRECTION.V, DIRECTION.V, DIRECTION.H], // слева 1 всклянь, справа 2 вертикали и 1 горизонталь
    [LAYOUT_TYPE.F1H2]: [DIRECTION.V, DIRECTION.H, DIRECTION.H], // слева 1 всклянь, справа 2 горизонтали
    [LAYOUT_TYPE.F1V4]: [DIRECTION.V, DIRECTION.V, DIRECTION.V, DIRECTION.V, DIRECTION.V], // 1 слева всклянь, справа 4 вертикали
    [LAYOUT_TYPE.XXLF1V2]: [DIRECTION.H, DIRECTION.V, DIRECTION.V], // слева 1 большой, справа 2 вертикали
    [LAYOUT_TYPE.VIGNETTE]: [DIRECTION.V],
}

export const ALBUM_NAMES_DATA = {
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
            left: 2930,
            top: 608,
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
    }
  },
}

export const SIZE_TYPES = {
  COVER: 'COVER', 
  FULL: 'FULL', 
  HALF: 'HALF',
  THREE_QUARTERS: 'THREE_QUARTERS',
  HALF_CUTTED: 'HALF_CUTTED',
  THREE_HORISONTAL_HALF: 'THREE_HORISONTAL_HALF',
  FOUR_HORISONTAL_FULL: 'FOUR_HORISONTAL_FULL',
  TWO_VERTICAL_ONE_HORISONTAL_HALF: 'TWO_VERTICAL_ONE_HORISONTAL_HALF',
  TWO_HORISONTAL_HALF: 'TWO_HORISONTAL_HALF',
  FOUR_VERTICAL_HALF: 'FOUR_VERTICAL_HALF',
  TWO_VERTICAL_CUSTOM: 'TWO_VERTICAL_CUSTOM',
  TWO_VERTICAL_RIGHT_CENTER: 'TWO_VERTICAL_RIGHT_CENTER',
  VIGNETTE: 'FULL', 
}

export const LAYOUT_TYPE_MAPPING = {
  [LAYOUT_TYPE.FULL]: [SIZE_TYPES.FULL],
  [LAYOUT_TYPE.COVER]: [SIZE_TYPES.COVER],
  [LAYOUT_TYPE.F1C1]: [SIZE_TYPES.HALF, SIZE_TYPES.HALF_CUTTED],
  [LAYOUT_TYPE.F1H3]: [SIZE_TYPES.HALF, SIZE_TYPES.THREE_HORISONTAL_HALF, SIZE_TYPES.THREE_HORISONTAL_HALF, SIZE_TYPES.THREE_HORISONTAL_HALF],
  [LAYOUT_TYPE.H4]: [SIZE_TYPES.FOUR_HORISONTAL_FULL, SIZE_TYPES.FOUR_HORISONTAL_FULL, SIZE_TYPES.FOUR_HORISONTAL_FULL, SIZE_TYPES.FOUR_HORISONTAL_FULL],
  [LAYOUT_TYPE.F1V2H1]: [SIZE_TYPES.HALF, SIZE_TYPES.TWO_VERTICAL_ONE_HORISONTAL_HALF, SIZE_TYPES.TWO_VERTICAL_ONE_HORISONTAL_HALF, SIZE_TYPES.TWO_VERTICAL_ONE_HORISONTAL_HALF],
  [LAYOUT_TYPE.F1V2]: [SIZE_TYPES.HALF, SIZE_TYPES.TWO_VERTICAL_RIGHT_CENTER, SIZE_TYPES.TWO_VERTICAL_RIGHT_CENTER],
  [LAYOUT_TYPE.F1H2]: [SIZE_TYPES.HALF, SIZE_TYPES.TWO_HORISONTAL_HALF, SIZE_TYPES.TWO_HORISONTAL_HALF],
  [LAYOUT_TYPE.F1V4]: [SIZE_TYPES.HALF, SIZE_TYPES.FOUR_VERTICAL_HALF, SIZE_TYPES.FOUR_VERTICAL_HALF, SIZE_TYPES.FOUR_VERTICAL_HALF,SIZE_TYPES.FOUR_VERTICAL_HALF,], 
  [LAYOUT_TYPE.XXLF1V2]: [SIZE_TYPES.THREE_QUARTERS, SIZE_TYPES.TWO_VERTICAL_CUSTOM, SIZE_TYPES.TWO_VERTICAL_CUSTOM],
  [LAYOUT_TYPE.VIGNETTE]: [SIZE_TYPES.FULL],
}

export const PADDINGS = {
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
    xPadding: 410,
    yPadding: 94,
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
    xPadding: 50,
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
  [SIZE_TYPES.TWO_VERTICAL_RIGHT_CENTER]: {
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