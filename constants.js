export const ASSETS_FOLDER_NAME = 'assets';
export const ALBUMS_FOLDER_NAME = 'albums';
export const DATA_FOLDER_NAME = 'data';
export const RESULT = 'result';
export const FILES_FOLDER = 'files';
export const CSVFileName = 'data.csv'
export const LAYOUT_PATH = 'assets/'

// Алекс бук
export const CUT_OFF = 35;

export const ALBUM_NAME_FIELD = 'Название альбома'

export const ROW_NAMES = {
  albumName: 'Название альбома',
  studentName: 'Имя участника',
  page: 'Разворот'
}

const ALBUM_NAMES = {
  ourKingergarten: 'Наш детский сад',
  figures: 'Фигуры',
  geometry: 'Геометрия',
  pencil: 'Карандаш',
  chocolade: 'Шоколад',
  memory: 'Мемори',
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
}

export const ALBUM_NAMES_DATA = {
  [ALBUM_NAMES.ourKingergarten]: {
    name: ALBUM_NAMES.ourKingergarten,
    layoutsData: {
      [LAYOUT_TYPE.COVER]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.ourKingergarten}/${LAYOUT_TYPE.COVER}/`,
        coordinates: {
          // ключи - количество разворотов
          // значение - координаты фото для соответствующего разворота
          1: {
            left: 3327,
            top: 926,
          },
          2: {
            left: 3381,
            top: 996,
          },
          3: {
            left: 3356,
            top: 996,
          },
        
          4: {
            left: 3369,
            top: 996,
          },
          5: {
            left: 3381,
            top: 996,
          },
          6: {
            left: 3392,
            top: 996,
          },
          7: {
            left: 3404,
            top: 996,
          },
          8: {
            left: 3415,
            top: 996,
          },
          9: {
            left: 3428,
            top: 996,
          },
          10: {
            left: 3439,
            top: 996,
          },
        },
        size: { 
          width: 1357,
          height: 1905,
        },
        decoration: {
          name: 'decoration.png',
          path: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.ourKingergarten}/${LAYOUT_TYPE.COVER}/`,
          // указывается смещение декорации относительно координат фото
          offsets: {
            left: -346,
            top: -83,
          }
        },
      },
      [LAYOUT_TYPE.FULL]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.ourKingergarten}/${LAYOUT_TYPE.FULL}/`
      },
      [LAYOUT_TYPE.F1C1]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.ourKingergarten}/${LAYOUT_TYPE.F1C1}/`
      },
      [LAYOUT_TYPE.F1H3]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.ourKingergarten}/${LAYOUT_TYPE.F1H3}/`,
      },
      [LAYOUT_TYPE.H4]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.ourKingergarten}/${LAYOUT_TYPE.H4}/`,
      },
      [LAYOUT_TYPE.F1V2H1]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.ourKingergarten}/${LAYOUT_TYPE.F1V2H1}/`,
      },
      [LAYOUT_TYPE.F1H2]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.ourKingergarten}/${LAYOUT_TYPE.F1H2}/`,
      },
      [LAYOUT_TYPE.F1V4]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.ourKingergarten}/${LAYOUT_TYPE.F1V4}/`,
      },
      [LAYOUT_TYPE.XXLF1V2]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.ourKingergarten}/${LAYOUT_TYPE.XXLF1V2}/`,
      },
      [LAYOUT_TYPE.F1V2]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.ourKingergarten}/${LAYOUT_TYPE.XXLF1V2}/`,
      },
    }
  },
  [ALBUM_NAMES.figures]: {
    name: ALBUM_NAMES.figures,
    layoutsData: {
      [LAYOUT_TYPE.COVER]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.figures}/${LAYOUT_TYPE.COVER}/`,
        coordinates: {
          // ключи - количество разворотов
          // значение - координаты фото для соответствующего разворота
          1: {
            left: 2925,
            top: 466,
          },
          2: {
            left: 3115,
            top: 486,
          },
          3: {
            left: 3090,
            top: 486,
          },
        
          4: {
            left: 3103,
            top: 486,
          },
          5: {
            left: 3115,
            top: 486,
          },
          6: {
            left: 3126,
            top: 486,
          },
          7: {
            left: 3128,
            top: 486,
          },
          8: {
            left: 3149,
            top: 486,
          },
          9: {
            left: 3162,
            top: 486,
          },
          10: {
            left: 3173,
            top: 486,
          },
        },
        size: { 
          width: 1822,
          height: 2679,
        },
        decoration: {
          name: 'decoration.png',
          path: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.figures}/${LAYOUT_TYPE.COVER}/`,
          // указывается смещение декорации относительно координат фото
          offsets: {
            left: 0,
            top: 0,
          }
        },
      },
      [LAYOUT_TYPE.FULL]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.figures}/${LAYOUT_TYPE.FULL}/`
      },
      [LAYOUT_TYPE.F1C1]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.figures}/${LAYOUT_TYPE.F1C1}/`
      },
      [LAYOUT_TYPE.F1H3]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.figures}/${LAYOUT_TYPE.F1H3}/`,
      },
      [LAYOUT_TYPE.H4]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.figures}/${LAYOUT_TYPE.H4}/`,
      },
      [LAYOUT_TYPE.F1V2H1]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.figures}/${LAYOUT_TYPE.F1V2H1}/`,
      },
      [LAYOUT_TYPE.F1H2]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.figures}/${LAYOUT_TYPE.F1H2}/`,
      },
      [LAYOUT_TYPE.F1V4]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.figures}/${LAYOUT_TYPE.F1V4}/`,
      },
      [LAYOUT_TYPE.XXLF1V2]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.figures}/${LAYOUT_TYPE.XXLF1V2}/`,
      },
      [LAYOUT_TYPE.F1V2]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.figures}/${LAYOUT_TYPE.XXLF1V2}/`,
      },
    }
  },
  [ALBUM_NAMES.geometry]: {
    name: ALBUM_NAMES.geometry,
    layoutsData: {
      [LAYOUT_TYPE.COVER]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.geometry}/${LAYOUT_TYPE.COVER}/`,
        coordinates: {
          // ключи - количество разворотов
          // значение - координаты фото для соответствующего разворота
          1: {
            left: 3153,
            top: 417,
          },
          2: {
            left: 3363,
            top: 457,
          },
          3: {
            left: 3338,
            top: 457,
          },
          4: {
            left: 3351,
            top: 457,
          },
          5: {
            left: 3363,
            top: 457,
          },
          6: {
            left: 3354,
            top: 457,
          },
          7: {
            left: 3366,
            top: 457,
          },
          8: {
            left: 3377,
            top: 457,
          },
          9: {
            left: 3390,
            top: 457,
          },
          10: {
            left: 3401,
            top: 457,
          },
        },
        size: { 
          width: 1725,
          height: 2809,
        },
        decoration: {
          name: 'decoration.png',
          path: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.geometry}/${LAYOUT_TYPE.COVER}/`,
          // указывается смещение декорации относительно координат фото
          offsets: {
            left: 784,
            top: 114,
          }
        },
      },
      [LAYOUT_TYPE.FULL]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.geometry}/${LAYOUT_TYPE.FULL}/`
      },
      [LAYOUT_TYPE.F1C1]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.geometry}/${LAYOUT_TYPE.F1C1}/`
      },
      [LAYOUT_TYPE.F1H3]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.geometry}/${LAYOUT_TYPE.F1H3}/`,
      },
      [LAYOUT_TYPE.H4]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.geometry}/${LAYOUT_TYPE.H4}/`,
      },
      [LAYOUT_TYPE.F1V2H1]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.geometry}/${LAYOUT_TYPE.F1V2H1}/`,
      },
      [LAYOUT_TYPE.F1H2]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.geometry}/${LAYOUT_TYPE.F1H2}/`,
      },
      [LAYOUT_TYPE.F1V4]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.geometry}/${LAYOUT_TYPE.F1V4}/`,
      },
      [LAYOUT_TYPE.XXLF1V2]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.geometry}/${LAYOUT_TYPE.XXLF1V2}/`,
      },
      [LAYOUT_TYPE.F1V2]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.geometry}/${LAYOUT_TYPE.XXLF1V2}/`,
      },
    }
  },
  [ALBUM_NAMES.pencil]: {
    name: ALBUM_NAMES.pencil,
    layoutsData: {
      [LAYOUT_TYPE.COVER]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.pencil}/${LAYOUT_TYPE.COVER}/`,
        coordinates: {
          // ключи - количество разворотов
          // значение - координаты фото для соответствующего разворота
          1: {
            left: 2985,
            top: 426,
          },
          2: {
            left: 3139,
            top: 446,
          },
          3: {
            left: 3116,
            top: 446,
          },
          4: {
            left: 3127,
            top: 446,
          },
          5: {
            left: 3139,
            top: 446,
          },
          6: {
            left: 3151,
            top: 446,
          },
          7: {
            left: 3163,
            top: 446,
          },
          8: {
            left: 3175,
            top: 446,
          },
          9: {
            left: 3186,
            top: 446,
          },
          10: {
            left: 3198,
            top: 446,
          },
        },
        size: { 
          width: 1822,
          height: 2679,
        },
      },
      [LAYOUT_TYPE.FULL]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.pencil}/${LAYOUT_TYPE.FULL}/`
      },
      [LAYOUT_TYPE.F1C1]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.pencil}/${LAYOUT_TYPE.F1C1}/`
      },
      [LAYOUT_TYPE.F1H3]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.pencil}/${LAYOUT_TYPE.F1H3}/`,
      },
      [LAYOUT_TYPE.H4]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.pencil}/${LAYOUT_TYPE.H4}/`,
      },
      [LAYOUT_TYPE.F1V2H1]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.pencil}/${LAYOUT_TYPE.F1V2H1}/`,
      },
      [LAYOUT_TYPE.F1H2]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.pencil}/${LAYOUT_TYPE.F1H2}/`,
      },
      [LAYOUT_TYPE.F1V4]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.pencil}/${LAYOUT_TYPE.F1V4}/`,
      },
      [LAYOUT_TYPE.XXLF1V2]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.pencil}/${LAYOUT_TYPE.XXLF1V2}/`,
      },
      [LAYOUT_TYPE.F1V2]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.pencil}/${LAYOUT_TYPE.XXLF1V2}/`,
      },
    }
  },
  [ALBUM_NAMES.chocolade]: {
    name: ALBUM_NAMES.chocolade,
    layoutsData: {
      [LAYOUT_TYPE.COVER]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.chocolade}/${LAYOUT_TYPE.COVER}/`,
        coordinates: {
          // ключи - количество разворотов
          // значение - координаты фото для соответствующего разворота
          1: {
            left: 2842,
            top: 439,
          },
          2: {
            left: 3032,
            top: 496,
          },
          3: {
            left: 3007,
            top: 496,
          },
          4: {
            left: 3020,
            top: 496,
          },
          5: {
            left: 3032,
            top: 496,
          },
          6: {
            left: 3043,
            top: 496,
          },
          7: {
            left: 3055,
            top: 496,
          },
          8: {
            left: 3076,
            top: 496,
          },
          9: {
            left: 3079,
            top: 496,
          },
          10: {
            left: 3090,
            top: 496,
          },
        },
        size: { 
          width: 2046,
          height: 3143,
        },
        decoration: {
          name: 'decoration.png',
          path: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.chocolade}/${LAYOUT_TYPE.COVER}/`,
          // указывается смещение декорации относительно координат фото
          offsets: {
            left: -1342,
            top: -1492,
          }
        },
      },
      [LAYOUT_TYPE.FULL]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.chocolade}/${LAYOUT_TYPE.FULL}/`
      },
      [LAYOUT_TYPE.F1C1]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.chocolade}/${LAYOUT_TYPE.F1C1}/`
      },
      [LAYOUT_TYPE.F1H3]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.chocolade}/${LAYOUT_TYPE.F1H3}/`,
      },
      [LAYOUT_TYPE.H4]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.chocolade}/${LAYOUT_TYPE.H4}/`,
      },
      [LAYOUT_TYPE.F1V2H1]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.chocolade}/${LAYOUT_TYPE.F1V2H1}/`,
      },
      [LAYOUT_TYPE.F1H2]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.chocolade}/${LAYOUT_TYPE.F1H2}/`,
      },
      [LAYOUT_TYPE.F1V4]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.chocolade}/${LAYOUT_TYPE.F1V4}/`,
      },
      [LAYOUT_TYPE.XXLF1V2]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.chocolade}/${LAYOUT_TYPE.XXLF1V2}/`,
      },
      [LAYOUT_TYPE.F1V2]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.chocolade}/${LAYOUT_TYPE.XXLF1V2}/`,
      },
    }
  },
  [ALBUM_NAMES.memory]: {
    name: ALBUM_NAMES.memory,
    layoutsData: {
      [LAYOUT_TYPE.COVER]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.memory}/${LAYOUT_TYPE.COVER}/`,
        coordinates: {
          // ключи - количество разворотов
          // значение - координаты фото для соответствующего разворота
          1: {
            left: 2858,
            top: 337,
          },
          2: {
            left: 3038,
            top: 357,
          },
          3: {
            left: 3013,
            top: 357,
          },
          4: {
            left: 3026,
            top: 357,
          },
          5: {
            left: 3038,
            top: 357,
          },
          6: {
            left: 3049,
            top: 357,
          },
          7: {
            left: 3061,
            top: 357,
          },
          8: {
            left: 3072,
            top: 357,
          },
          9: {
            left: 3085,
            top: 357,
          },
          10: {
            left: 3096,
            top: 357,
          },
        },
        size: { 
          width: 2080,
          height: 3122,
        },
        decoration: {
          name: 'decoration.png',
          path: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.memory}/${LAYOUT_TYPE.COVER}/`,
          // указывается смещение декорации относительно координат фото
          offsets: {
            left: -443,
            top: -245,
          }
        },
      },
      [LAYOUT_TYPE.FULL]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.memory}/${LAYOUT_TYPE.FULL}/`
      },
      [LAYOUT_TYPE.F1C1]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.memory}/${LAYOUT_TYPE.F1C1}/`
      },
      [LAYOUT_TYPE.F1H3]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.memory}/${LAYOUT_TYPE.F1H3}/`,
      },
      [LAYOUT_TYPE.H4]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.memory}/${LAYOUT_TYPE.H4}/`,
      },
      [LAYOUT_TYPE.F1V2H1]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.memory}/${LAYOUT_TYPE.F1V2H1}/`,
      },
      [LAYOUT_TYPE.F1H2]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.memory}/${LAYOUT_TYPE.F1H2}/`,
      },
      [LAYOUT_TYPE.F1V4]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.memory}/${LAYOUT_TYPE.F1V4}/`,
      },
      [LAYOUT_TYPE.XXLF1V2]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.memory}/${LAYOUT_TYPE.XXLF1V2}/`,
      },
      [LAYOUT_TYPE.F1V2]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.memory}/${LAYOUT_TYPE.XXLF1V2}/`,
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
}

export const LAYOUT_TYPE_MAPPING = {
  [LAYOUT_TYPE.FULL]: [SIZE_TYPES.FULL],
  [LAYOUT_TYPE.COVER]: [SIZE_TYPES.COVER],
  [LAYOUT_TYPE.F1C1]: [SIZE_TYPES.HALF, SIZE_TYPES.HALF_CUTTED],
  [LAYOUT_TYPE.F1H3]: [SIZE_TYPES.HALF, SIZE_TYPES.THREE_HORISONTAL_HALF, SIZE_TYPES.THREE_HORISONTAL_HALF, SIZE_TYPES.THREE_HORISONTAL_HALF],
  [LAYOUT_TYPE.H4]: [SIZE_TYPES.FOUR_HORISONTAL_FULL, SIZE_TYPES.FOUR_HORISONTAL_FULL, SIZE_TYPES.FOUR_HORISONTAL_FULL, SIZE_TYPES.FOUR_HORISONTAL_FULL],
  [LAYOUT_TYPE.F1V2H1]: [SIZE_TYPES.HALF, SIZE_TYPES.TWO_VERTICAL_ONE_HORISONTAL_HALF, SIZE_TYPES.TWO_VERTICAL_ONE_HORISONTAL_HALF, SIZE_TYPES.TWO_VERTICAL_ONE_HORISONTAL_HALF],
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
  [SIZE_TYPES.FULL]: {
    width: 1,
    height: 1,
    innerPadding: 0
  },
}