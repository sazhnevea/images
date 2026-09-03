export const ASSETS_FOLDER_NAME = 'assets';
export const ALBUMS_FOLDER_NAME = 'albums';
export const DATA_FOLDER_NAME = 'data';
export const RESULT = 'result';
export const FILES_FOLDER = 'files';
export const CSVFileName = 'data.csv'
export const LAYOUT_PATH = 'assets/'

// Фабрика фотокниги
export const CUT_OFF = 60;

export const ROW_NAMES = {
  albumName: 'Название альбома',
  studentName: 'Имя участника',
  page: 'Разворот'
}

const ALBUM_NAMES = {
  ourKingergarten: 'Наш детский сад',
  figures: 'Фигуры',
  geometry: 'Геометрия',
  pencil: 'Карандаши',
  chocolade: 'Шоколад',
  memory: 'Memory',
  firstClassmanWhite: 'Первоклассник white',
  aLaRus: 'А-ля Рус',
  neonLight: 'Неон-светлый',
  neonDark: 'Неон-темный',
  firstClassmanGreen: 'Первоклассник green',
  pixel: 'Пиксель',
}

export const DIRECTION = {
  V: 'vertical',
  H: 'horisontal',
}

export const LAYOUT_TYPE = {
  COVER: 'обложка',
  FULL: 'общая',
  L10: '10',
  L11: '11',
  L12: '12',
  L13: '13',
  L14: '14',
  L15: '15',
  L16: '16',
  L17: '17',
  L19: '19',
  L20: '20',
  L21: '21',
  L23: '23',
}

export const LAYOUT_TYPE_DIRECTION_MAPPING = {
  [LAYOUT_TYPE.COVER]: [DIRECTION.V],
  [LAYOUT_TYPE.FULL]: [DIRECTION.H],
  [LAYOUT_TYPE.L10]: [DIRECTION.H, DIRECTION.H, DIRECTION.V, DIRECTION.H, DIRECTION.V],
  [LAYOUT_TYPE.L11]: [DIRECTION.H, DIRECTION.V, DIRECTION.V, DIRECTION.V, DIRECTION.V, DIRECTION.H],
  [LAYOUT_TYPE.L12]: [DIRECTION.V, DIRECTION.V],
  [LAYOUT_TYPE.L13]: [DIRECTION.H, DIRECTION.H, DIRECTION.H, DIRECTION.V, DIRECTION.V, DIRECTION.H],
  [LAYOUT_TYPE.L14]: [DIRECTION.V, DIRECTION.H, DIRECTION.H, DIRECTION.H],
  [LAYOUT_TYPE.L15]: [DIRECTION.H, DIRECTION.H, DIRECTION.H, DIRECTION.H, DIRECTION.H],
  [LAYOUT_TYPE.L16]: [DIRECTION.H, DIRECTION.H, DIRECTION.H, DIRECTION.H],
  [LAYOUT_TYPE.L17]: [DIRECTION.V, DIRECTION.H, DIRECTION.H],
  [LAYOUT_TYPE.L19]: [DIRECTION.V, DIRECTION.V, DIRECTION.H, DIRECTION.H, DIRECTION.H],
  [LAYOUT_TYPE.L20]: [DIRECTION.V, DIRECTION.V, DIRECTION.V, DIRECTION.V, DIRECTION.H, DIRECTION.H],
  [LAYOUT_TYPE.L21]: [DIRECTION.V, DIRECTION.V, DIRECTION.V, DIRECTION.V, DIRECTION.H, DIRECTION.H, DIRECTION.H],
  [LAYOUT_TYPE.L23]: [DIRECTION.H, DIRECTION.H, DIRECTION.H, DIRECTION.V],
}

const INTERNAL_LAYOUT_TYPES = [
  LAYOUT_TYPE.L10,
  LAYOUT_TYPE.L11,
  LAYOUT_TYPE.L12,
  LAYOUT_TYPE.L13,
  LAYOUT_TYPE.L14,
  LAYOUT_TYPE.L15,
  LAYOUT_TYPE.L16,
  LAYOUT_TYPE.L17,
  LAYOUT_TYPE.L19,
  LAYOUT_TYPE.L20,
  LAYOUT_TYPE.L21,
  LAYOUT_TYPE.L23,
];

const createInternalLayouts = (albumName) => Object.fromEntries(
  INTERNAL_LAYOUT_TYPES.map((layoutType) => [
    layoutType,
    {
      layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${albumName}/${layoutType}/`,
    },
  ]),
);

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
            left: 3331,
            top: 767,
          },
          2: {
            left: 3331,
            top: 767,
          },
          3: {
            left: 3331,
            top: 767,
          },
          4: {
            left: 3331,
            top: 767,
          },
          5: {
            left: 3355,
            top: 767,
          },
          6: {
            left: 3355,
            top: 767,
          },
          7: {
            left: 3379,
            top: 767,
          },
          8: {
            left: 3379,
            top: 767,
          },
          9: {
            left: 3403,
            top: 767,
          },
          10: {
            left: 3403,
            top: 767,
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
      ...createInternalLayouts(ALBUM_NAMES.ourKingergarten),
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
            left: 3099,
            top: 497,
          },
          2: {
            left: 3099,
            top: 497,
          },
          3: {
            left: 3099,
            top: 497,
          },
        
          4: {
            left: 3099,
            top: 497,
          },
          5: {
            left: 3123,
            top: 497,
          },
          6: {
            left: 3123,
            top: 497,
          },
          7: {
            left: 3147,
            top: 497,
          },
          8: {
            left: 3147,
            top: 497,
          },
          9: {
            left: 3171,
            top: 497,
          },
          10: {
            left: 3171,
            top: 497,
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
      ...createInternalLayouts(ALBUM_NAMES.figures),
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
            left: 3337,
            top: 387,
          },
          2: {
            left: 3337,
            top: 387,
          },
          3: {
            left: 3337,
            top: 387,
          },
          4: {
            left: 3337,
            top: 387,
          },
          5: {
            left: 3361,
            top: 387,
          },
          6: {
            left: 3361,
            top: 387,
          },
          7: {
            left: 3385,
            top: 387,
          },
          8: {
            left: 3385,
            top: 387,
          },
          9: {
            left: 3409,
            top: 387,
          },
          10: {
            left: 3409,
            top: 387,
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
      ...createInternalLayouts(ALBUM_NAMES.geometry),
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
            left: 3099,
            top: 437,
          },
          2: {
            left: 3099,
            top: 437,
          },
          3: {
            left: 3099,
            top: 437,
          },
          4: {
            left: 3099,
            top: 437,
          },
          5: {
            left: 3123,
            top: 437,
          },
          6: {
            left: 3123,
            top: 437,
          },
          7: {
            left: 3147,
            top: 437,
          },
          8: {
            left: 3147,
            top: 437,
          },
          9: {
            left: 3171,
            top: 437,
          },
          10: {
            left: 3171,
            top: 437,
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
      ...createInternalLayouts(ALBUM_NAMES.pencil),
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
            left: 2986,
            top: 337,
          },
          2: {
            left: 2986,
            top: 337,
          },
          3: {
            left: 2986,
            top: 337,
          },
          4: {
            left: 2986,
            top: 337,
          },
          5: {
            left: 3010,
            top: 337,
          },
          6: {
            left: 3010,
            top: 337,
          },
          7: {
            left: 3034,
            top: 337,
          },
          8: {
            left: 3034,
            top: 337,
          },
          9: {
            left: 3058,
            top: 337,
          },
          10: {
            left: 3058,
            top: 337,
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
            // из таблицы
            left: -2379,
            top: 90,
          }
        },
      },
      [LAYOUT_TYPE.FULL]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.chocolade}/${LAYOUT_TYPE.FULL}/`
      },
      ...createInternalLayouts(ALBUM_NAMES.chocolade),
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
            left: 2982,
            top: 312,
          },
          2: {
            left: 2982,
            top: 312,
          },
          3: {
            left: 2982,
            top: 312,
          },
          4: {
            left: 2982,
            top: 312,
          },
          5: {
            left: 3006,
            top: 312,
          },
          6: {
            left: 3006,
            top: 312,
          },
          7: {
            left: 3030,
            top: 312,
          },
          8: {
            left: 3030,
            top: 312,
          },
          9: {
            left: 3054,
            top: 312,
          },
          10: {
            left: 3054,
            top: 312,
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
            left: -437,
            top: -240,
          }
        },
      },
      [LAYOUT_TYPE.FULL]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.memory}/${LAYOUT_TYPE.FULL}/`
      },
      ...createInternalLayouts(ALBUM_NAMES.memory),
    }
  },
  [ALBUM_NAMES.firstClassmanWhite]: {
    name: ALBUM_NAMES.firstClassmanWhite,
    layoutsData: {
      [LAYOUT_TYPE.COVER]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.firstClassmanWhite}/${LAYOUT_TYPE.COVER}/`,
        coordinates: {
          // ключи - количество разворотов
          // значение - координаты фото для соответствующего разворота
          1: {
            left: 3047,
            top: 841,
          },
          2: {
            left: 3047,
            top: 841,
          },
          3: {
            left: 3047,
            top: 841,
          },
          4: {
            left: 3047,
            top: 841,
          },
          5: {
            left: 3071,
            top: 841,
          },
          6: {
            left: 3071,
            top: 841,
          },
          7: {
            left: 3095,
            top: 841,
          },
          8: {
            left: 3095,
            top: 841,
          },
          9: {
            left: 3119,
            top: 841,
          },
          10: {
            left: 3119,
            top: 841,
          },
        },
        size: { 
          width: 1926,
          height: 2700,
        },
        decoration: {
          name: 'decoration.png',
          path: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.firstClassmanWhite}/${LAYOUT_TYPE.COVER}/`,
          // указывается смещение декорации относительно координат фото
          offsets: {
            left: -85,
            top: -4,
          }
        },
      },
      [LAYOUT_TYPE.FULL]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.firstClassmanWhite}/${LAYOUT_TYPE.FULL}/`
      },
      ...createInternalLayouts(ALBUM_NAMES.firstClassmanWhite),
    }
  },
  [ALBUM_NAMES.aLaRus]: {
    name: ALBUM_NAMES.aLaRus,
    layoutsData: {
      [LAYOUT_TYPE.COVER]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.aLaRus}/${LAYOUT_TYPE.COVER}/`,
        coordinates: {
          // ключи - количество разворотов
          // значение - координаты фото для соответствующего разворота
          1: {
            left: 3111,
            top: 412,
          },
          2: {
            left: 3111,
            top: 412,
          },
          3: {
            left: 3111,
            top: 412,
          },
          4: {
            left: 3111,
            top: 412,
          },
          5: {
            left: 3135,
            top: 412,
          },
          6: {
            left: 3135,
            top: 412,
          },
          7: {
            left: 3159,
            top: 412,
          },
          8: {
            left: 3159,
            top: 412,
          },
          9: {
            left: 3183,
            top: 412,
          },
          10: {
            left: 3183,
            top: 412,
          },
        },
        size: { 
          width: 1818,
          height: 2524,
        },
        decoration: {
          name: 'decoration.png',
          path: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.aLaRus}/${LAYOUT_TYPE.COVER}/`,
          // указывается смещение декорации относительно координат фото
          offsets: {
            left: -93,
            top: -88,
          }
        },
      },
      [LAYOUT_TYPE.FULL]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.aLaRus}/${LAYOUT_TYPE.FULL}/`
      },
      ...createInternalLayouts(ALBUM_NAMES.aLaRus),
    }
  },
  [ALBUM_NAMES.neonLight]: {
    name: ALBUM_NAMES.neonLight,
    layoutsData: {
      [LAYOUT_TYPE.COVER]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.neonLight}/${LAYOUT_TYPE.COVER}/`,
        coordinates: {
          // ключи - количество разворотов
          // значение - координаты фото для соответствующего разворота
          1: {
            left: 3114,
            top: 614,
          },
          2: {
            left: 3114,
            top: 614,
          },
          3: {
            left: 3114,
            top: 614,
          },
          4: {
            left: 3114,
            top: 614,
          },
          5: {
            left: 3138,
            top: 614,
          },
          6: {
            left: 3138,
            top: 614,
          },
          7: {
            left: 3162,
            top: 614,
          },
          8: {
            left: 3162,
            top: 614,
          },
          9: {
            left: 3186,
            top: 614,
          },
          10: {
            left: 3186,
            top: 614,
          },
        },
        size: { 
          width: 1776,
          height: 2665,
        },
        decoration: {
          name: 'decoration.png',
          path: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.neonLight}/${LAYOUT_TYPE.COVER}/`,
          // указывается смещение декорации относительно координат фото
          offsets: {
            left: 1209,
            top: -380,
          }
        },
      },
      [LAYOUT_TYPE.FULL]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.neonLight}/${LAYOUT_TYPE.FULL}/`
      },
      ...createInternalLayouts(ALBUM_NAMES.neonLight),
    }
  },
  [ALBUM_NAMES.neonDark]: {
    name: ALBUM_NAMES.neonDark,
    layoutsData: {
      [LAYOUT_TYPE.COVER]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.neonDark}/${LAYOUT_TYPE.COVER}/`,
        coordinates: {
          // ключи - количество разворотов
          // значение - координаты фото для соответствующего разворота
          1: {
            left: 3001,
            top: 384,
          },
          2: {
            left: 3001,
            top: 384,
          },
          3: {
            left: 3001,
            top: 384,
          },
          4: {
            left: 3001,
            top: 384,
          },
          5: {
            left: 3025,
            top: 384,
          },
          6: {
            left: 3025,
            top: 384,
          },
          7: {
            left: 3049,
            top: 384,
          },
          8: {
            left: 3049,
            top: 384,
          },
          9: {
            left: 3073,
            top: 384,
          },
          10: {
            left: 3073,
            top: 384,
          },
        },
        size: { 
          width: 2020,
          height: 2430,
        },
      },
      [LAYOUT_TYPE.FULL]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.neonDark}/${LAYOUT_TYPE.FULL}/`
      },
      ...createInternalLayouts(ALBUM_NAMES.neonDark),
    }
  },
  [ALBUM_NAMES.firstClassmanGreen]: {
    name: ALBUM_NAMES.firstClassmanGreen,
    layoutsData: {
      [LAYOUT_TYPE.COVER]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.firstClassmanGreen}/${LAYOUT_TYPE.COVER}/`,
        coordinates: {
          // ключи - количество разворотов
          // значение - координаты фото для соответствующего разворота
          1: {
            left: 3047,
            top: 841,
          },
          2: {
            left: 3047,
            top: 841,
          },
          3: {
            left: 3047,
            top: 841,
          },
          4: {
            left: 3047,
            top: 841,
          },
          5: {
            left: 3071,
            top: 841,
          },
          6: {
            left: 3071,
            top: 841,
          },
          7: {
            left: 3095,
            top: 841,
          },
          8: {
            left: 3095,
            top: 841,
          },
          9: {
            left: 3119,
            top: 841,
          },
          10: {
            left: 3119,
            top: 841,
          },
        },
        size: { 
          width: 1926,
          height: 2700,
        },
        decoration: {
          name: 'decoration.png',
          path: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.firstClassmanGreen}/${LAYOUT_TYPE.COVER}/`,
          // указывается смещение декорации относительно координат фото
          offsets: {
            left: -85,
            top: -4,
          }
        },
      },
      [LAYOUT_TYPE.FULL]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.firstClassmanGreen}/${LAYOUT_TYPE.FULL}/`
      },
      ...createInternalLayouts(ALBUM_NAMES.firstClassmanGreen),
    }
  },
  [ALBUM_NAMES.pixel]: {
    name: ALBUM_NAMES.pixel,
    layoutsData: {
      [LAYOUT_TYPE.COVER]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.pixel}/${LAYOUT_TYPE.COVER}/`,
        coordinates: {
          // ключи - количество разворотов
          // значение - координаты фото для соответствующего разворота
          1: {
            left: 2979,
            top: 359,
          },
          2: {
            left: 2979,
            top: 359,
          },
          3: {
            left: 2979,
            top: 359,
          },
          4: {
            left: 2979,
            top: 359,
          },
          5: {
            left: 3002,
            top: 359,
          },
          6: {
            left: 3002,
            top: 359,
          },
          7: {
            left: 3027,
            top: 359,
          },
          8: {
            left: 3027,
            top: 359,
          },
          9: {
            left: 3050,
            top: 359,
          },
          10: {
            left: 3050,
            top: 359,
          },
        },
        size: { 
          width: 2065,
          height: 3182,
        },
        decoration: {
          name: 'decoration.png',
          path: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.pixel}/${LAYOUT_TYPE.COVER}/`,
          // указывается смещение декорации относительно координат фото
          offsets: {
            left: -6,
            top: -7,
          }
        },
      },
      [LAYOUT_TYPE.FULL]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.pixel}/${LAYOUT_TYPE.FULL}/`
      },
      ...createInternalLayouts(ALBUM_NAMES.pixel),
    }
  },
}
