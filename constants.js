export const ASSETS_FOLDER_NAME = 'assets';
export const ALBUMS_FOLDER_NAME = 'albums';
export const DATA_FOLDER_NAME = 'data';
export const RESULT = 'result';
export const FILES_FOLDER = 'files';
export const CSVFileName = 'data.csv'
export const LAYOUT_PATH = 'assets/layout.jpg'

// Алекс бук
export const CUT_OFF = 35;

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
  [LAYOUT_TYPE.F1V2]: [DIRECTION.V, DIRECTION.V, DIRECTION.V], // слева 1 всклянь, справа 2 вертикали
}

export const ALBUM_NAMES_DATA = {
  [ALBUM_NAMES.ourKingergarten]: {
    name: ALBUM_NAMES.ourKingergarten,
    layoutsData: {
      [LAYOUT_TYPE.COVER]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/ourKingergarten/${LAYOUT_TYPE.COVER}/`,
        coordinates: {
          // ключи - количество разворотов
          // значение - координаты фото для соответствующего разворота
          1: {
            left: 3244,
            top: 777,
          },
          2: {
            left: 3381,
            top: 996,
          },
          3: {
            left: 3379,
            top: 1026,
          },
          // координаты ниже не обновлены для алекса
          4: {
            left: 3280,
            top: 777,
          },
          5: {
            left: 3292,
            top: 777,
          },
          6: {
            left: 3304,
            top: 777,
          },
        },
        size: { 
          width: 1357,
          height: 1905,
        },
        decoration: {
          name: 'decoration.png',
          path: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/ourKingergarten/${LAYOUT_TYPE.COVER}/`,
          offsets: {
            left: -346,
            top: -83,
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
}

// знаения задаются в процентах от всей ширины лейаута за минусом двух линий отреза
// 'layoutWidth минус cutOffs', layoutWidth.minusCutOffs()
// 'width', width) ширина фот
// 'width %', width / layoutWidth.minusCutOffs()
export const SIZES = {
  [SIZE_TYPES.HALF]: {
    width: 0.5,
    height: 1,
  },
  [SIZE_TYPES.HALF_CUTTED]: {
    width: 0.3937,
    height: 0.868,
  },
  [SIZE_TYPES.THREE_QUARTERS]: {
    width: 0.7595,
    height: 0.868, 
  },
  [SIZE_TYPES.THREE_HORISONTAL_HALF]: {
    width: 0.3264182895850974,
    height: 0.29105322763306907,
    innerPadding: 50,
  },
  [SIZE_TYPES.FOUR_HORISONTAL_FULL]: {
    width: 0.45,
    height: 0.427,
    innerPadding: 50
  },
  [SIZE_TYPES.TWO_VERTICAL_ONE_HORISONTAL_HALF]: {
    width: 0.1951735817104149,
    height: 0.4269535673839185,
    innerPadding: 50
  },
  [SIZE_TYPES.TWO_HORISONTAL_HALF]: {
    width: 0.4703,
    height: 0.419,
    innerPadding: 50
  },
  [SIZE_TYPES.FOUR_VERTICAL_HALF]: {
    width: 0.1951735817104149,
    height: 0.4269535673839185 ,
    innerPadding: 50
  },
  [SIZE_TYPES.TWO_VERTICAL_CUSTOM]: {
    width: 0.187976,
    height: 0.42695,
    innerPadding: 50
  },
  [SIZE_TYPES.TWO_VERTICAL_RIGHT_CENTER]: {
    width: 0.1951735817104149,
    height: 0.4269535673839185,
    innerPadding: 50
  },
}