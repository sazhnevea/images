export const ASSETS_FOLDER_NAME = 'assets';
export const ALBUMS_FOLDER_NAME = 'albums';
export const DATA_FOLDER_NAME = 'data';
export const RESULT = 'result';
export const FILES_FOLDER = 'files';
export const CSVFileName = 'data.csv'
export const LAYOUT_PATH = 'assets/'

// Фабрика фотокниги
export const CUT_OFF = 35;

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
  H1V2V2H1: 'слева 1 горизонталь и 2 вертикали, справа 2 вертикали и 1 горизонталь', 
  F1H2: 'слева 1 всклянь, справа 2 горизонтали', 
  F1V4: '1 слева всклянь, справа 4 вертикали',
  XXLF1V2: 'слева 1 большой, справа 2 вертикали',
  H2V1H1V1: '2 горизонтали 1 вертикаль 1 горизонталь 1 вертикаль',
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
  [LAYOUT_TYPE.H2V1H1V1]: [DIRECTION.H, DIRECTION.H, DIRECTION.V, DIRECTION.H, DIRECTION.V], 
  [LAYOUT_TYPE.H1V2V2H1]: [DIRECTION.H, DIRECTION.V, DIRECTION.V, DIRECTION.V, DIRECTION.V, DIRECTION.H], 
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
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.ourKingergarten}/${LAYOUT_TYPE.F1V2}/`,
      },
      [LAYOUT_TYPE.H2V1H1V1]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.ourKingergarten}/${LAYOUT_TYPE.H2V1H1V1}/`,
      },
      [LAYOUT_TYPE.H1V2V2H1]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.ourKingergarten}/${LAYOUT_TYPE.H1V2V2H1}/`,
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
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.figures}/${LAYOUT_TYPE.F1V2}/`,
      },
      [LAYOUT_TYPE.H2V1H1V1]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.figures}/${LAYOUT_TYPE.H2V1H1V1}/`,
      },
      [LAYOUT_TYPE.H1V2V2H1]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.figures}/${LAYOUT_TYPE.H1V2V2H1}/`,
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
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.geometry}/${LAYOUT_TYPE.F1V2}/`,
      },
      [LAYOUT_TYPE.H2V1H1V1]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.geometry}/${LAYOUT_TYPE.H2V1H1V1}/`,
      },
      [LAYOUT_TYPE.H1V2V2H1]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.geometry}/${LAYOUT_TYPE.H1V2V2H1}/`,
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
            left: 3093,
            top: 437,
          },
          2: {
            left: 3139,
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
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.pencil}/${LAYOUT_TYPE.F1V2}/`,
      },
      [LAYOUT_TYPE.H2V1H1V1]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.pencil}/${LAYOUT_TYPE.H2V1H1V1}/`,
      },
      [LAYOUT_TYPE.H1V2V2H1]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.pencil}/${LAYOUT_TYPE.H1V2V2H1}/`,
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
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.chocolade}/${LAYOUT_TYPE.F1V2}/`,
      },
      [LAYOUT_TYPE.H2V1H1V1]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.chocolade}/${LAYOUT_TYPE.H2V1H1V1}/`,
      },
      [LAYOUT_TYPE.H1V2V2H1]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.chocolade}/${LAYOUT_TYPE.H1V2V2H1}/`,
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
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.memory}/${LAYOUT_TYPE.F1V2}/`,
      },
      [LAYOUT_TYPE.H2V1H1V1]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.memory}/${LAYOUT_TYPE.H2V1H1V1}/`,
      },
      [LAYOUT_TYPE.H1V2V2H1]: {
        layoutPathFolder: `${ASSETS_FOLDER_NAME}/${ALBUMS_FOLDER_NAME}/${ALBUM_NAMES.memory}/${LAYOUT_TYPE.H1V2V2H1}/`,
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
  ONE_QUATER: 'ONE_QUATER',
  TWO_VERTICAL_ONE_HORISONTAL_ONE_HORISONRAL_TWO_VERTICAL: 'TWO_VERTICAL_ONE_HORISONTAL_ONE_HORISONRAL_TWO_VERTICAL',

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
  [LAYOUT_TYPE.H2V1H1V1]: [SIZE_TYPES.ONE_QUATER, SIZE_TYPES.ONE_QUATER, SIZE_TYPES.ONE_QUATER, SIZE_TYPES.ONE_QUATER, SIZE_TYPES.ONE_QUATER],
  [LAYOUT_TYPE.H1V2V2H1]: [SIZE_TYPES.TWO_VERTICAL_ONE_HORISONTAL_ONE_HORISONRAL_TWO_VERTICAL, SIZE_TYPES.TWO_VERTICAL_ONE_HORISONTAL_ONE_HORISONRAL_TWO_VERTICAL, SIZE_TYPES.TWO_VERTICAL_ONE_HORISONTAL_ONE_HORISONRAL_TWO_VERTICAL, SIZE_TYPES.TWO_VERTICAL_ONE_HORISONTAL_ONE_HORISONRAL_TWO_VERTICAL, SIZE_TYPES.TWO_VERTICAL_ONE_HORISONTAL_ONE_HORISONRAL_TWO_VERTICAL, SIZE_TYPES.TWO_VERTICAL_ONE_HORISONTAL_ONE_HORISONRAL_TWO_VERTICAL],
}

// значения задаются в процентах от всей ширины лейаута за минусом двух линий отреза
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
  [SIZE_TYPES.ONE_QUATER]: {
    width: 0.25,
    height: 0.5,
    innerPadding: 50
  },
  [SIZE_TYPES.TWO_VERTICAL_ONE_HORISONTAL_ONE_HORISONRAL_TWO_VERTICAL]: {
    width: 0.1951735817104149,
    height: 0.4269535673839185,
    innerPadding: 50
  },
}