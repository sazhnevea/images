"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PADDINGS = exports.LAYOUT_TYPE_MAPPING = exports.ALBUM_DATA = exports.DIRECTION = exports.ALBUM_NAME_FIELD = exports.CUT_OFF = exports.LAYOUT_PATH = exports.CSVPathSort = exports.CSVPathImpose = exports.SOURCE_SORT_FOLDER_NAME = exports.RETOUCH_FOLDER_NAME = exports.RESULT = exports.IMPOSE_FOLDER_NAME = exports.DATA_FOLDER_NAME = exports.ALBUMS_FOLDER_NAME = exports.ASSETS_FOLDER_NAME = void 0;
var types_1 = require("./impose/types");
exports.ASSETS_FOLDER_NAME = 'assets';
exports.ALBUMS_FOLDER_NAME = 'albums';
exports.DATA_FOLDER_NAME = 'data';
exports.IMPOSE_FOLDER_NAME = 'верстка';
exports.RESULT = 'result';
exports.RETOUCH_FOLDER_NAME = 'ретушь';
exports.SOURCE_SORT_FOLDER_NAME = 'цветокоррекция';
exports.CSVPathImpose = "\u0432\u0435\u0440\u0441\u0442\u043A\u0430.csv";
exports.CSVPathSort = "\u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430.csv";
exports.LAYOUT_PATH = 'assets/layout.jpg';
exports.CUT_OFF = 24;
exports.ALBUM_NAME_FIELD = 'Название альбома';
exports.DIRECTION = {
    V: 'verical',
    H: 'horisontal',
};
exports.ALBUM_DATA = (_a = {},
    _a[types_1.ALBUM_NAMES.ourKingergarten] = {
        name: types_1.ALBUM_NAMES.ourKingergarten,
        layoutsData: (_b = {},
            _b[types_1.LAYOUT_TYPE.COVER] = {
                layoutPathFolder: "".concat(exports.ASSETS_FOLDER_NAME, "/").concat(exports.ALBUMS_FOLDER_NAME, "/ourKingergarten/").concat(types_1.LAYOUT_TYPE.COVER, "/"),
                step: 12,
                decoration: {
                    name: 'decoration.png',
                    path: "".concat(exports.ASSETS_FOLDER_NAME, "/").concat(exports.ALBUMS_FOLDER_NAME, "/ourKingergarten/").concat(types_1.LAYOUT_TYPE.COVER, "/"),
                    offsets: {
                        left: 2922,
                        top: 718,
                    }
                },
            },
            _b[types_1.LAYOUT_TYPE.F1C1] = {
                layoutPathFolder: "".concat(exports.ASSETS_FOLDER_NAME, "/").concat(exports.ALBUMS_FOLDER_NAME, "/ourKingergarten/").concat(types_1.LAYOUT_TYPE.F1C1, "/")
            },
            _b[types_1.LAYOUT_TYPE.F1H3] = {
                layoutPathFolder: "".concat(exports.ASSETS_FOLDER_NAME, "/").concat(exports.ALBUMS_FOLDER_NAME, "/ourKingergarten/").concat(types_1.LAYOUT_TYPE.F1H3, "/"),
            },
            _b[types_1.LAYOUT_TYPE.H4] = {
                layoutPathFolder: "".concat(exports.ASSETS_FOLDER_NAME, "/").concat(exports.ALBUMS_FOLDER_NAME, "/ourKingergarten/").concat(types_1.LAYOUT_TYPE.H4, "/"),
            },
            _b[types_1.LAYOUT_TYPE.F1V2H1] = {
                layoutPathFolder: "".concat(exports.ASSETS_FOLDER_NAME, "/").concat(exports.ALBUMS_FOLDER_NAME, "/ourKingergarten/").concat(types_1.LAYOUT_TYPE.F1V2H1, "/"),
            },
            _b[types_1.LAYOUT_TYPE.F1H2] = {
                layoutPathFolder: "".concat(exports.ASSETS_FOLDER_NAME, "/").concat(exports.ALBUMS_FOLDER_NAME, "/ourKingergarten/").concat(types_1.LAYOUT_TYPE.F1H2, "/"),
            },
            _b[types_1.LAYOUT_TYPE.F1V4] = {
                layoutPathFolder: "".concat(exports.ASSETS_FOLDER_NAME, "/").concat(exports.ALBUMS_FOLDER_NAME, "/ourKingergarten/").concat(types_1.LAYOUT_TYPE.F1V4, "/"),
            },
            _b[types_1.LAYOUT_TYPE.XXLF1V2] = {
                layoutPathFolder: "".concat(exports.ASSETS_FOLDER_NAME, "/").concat(exports.ALBUMS_FOLDER_NAME, "/ourKingergarten/").concat(types_1.LAYOUT_TYPE.XXLF1V2, "/"),
            },
            _b[types_1.LAYOUT_TYPE.VIGNETTE] = {
                layoutPathFolder: "".concat(exports.ASSETS_FOLDER_NAME, "/").concat(exports.ALBUMS_FOLDER_NAME, "/ourKingergarten/").concat(types_1.LAYOUT_TYPE.VIGNETTE, "/"),
            },
            _b[types_1.LAYOUT_TYPE.FULL] = {
                layoutPathFolder: "".concat(exports.ASSETS_FOLDER_NAME, "/").concat(exports.ALBUMS_FOLDER_NAME, "/ourKingergarten/").concat(types_1.LAYOUT_TYPE.FULL, "/"),
            },
            _b)
    },
    _a);
exports.LAYOUT_TYPE_MAPPING = (_c = {},
    _c[types_1.SIZE_CODES.FULL] = [types_1.SIZE_TYPES.FULL],
    _c[types_1.SIZE_CODES.COVER] = [types_1.SIZE_TYPES.COVER],
    _c[types_1.SIZE_CODES.F1C1] = [types_1.SIZE_TYPES.HALF, types_1.SIZE_TYPES.HALF_CUTTED],
    _c[types_1.SIZE_CODES.F1H3] = [types_1.SIZE_TYPES.HALF, types_1.SIZE_TYPES.THREE_HORISONTAL_HALF, types_1.SIZE_TYPES.THREE_HORISONTAL_HALF, types_1.SIZE_TYPES.THREE_HORISONTAL_HALF],
    _c[types_1.SIZE_CODES.H4] = [types_1.SIZE_TYPES.FOUR_HORISONTAL_FULL, types_1.SIZE_TYPES.FOUR_HORISONTAL_FULL, types_1.SIZE_TYPES.FOUR_HORISONTAL_FULL, types_1.SIZE_TYPES.FOUR_HORISONTAL_FULL],
    _c[types_1.SIZE_CODES.F1V2H1] = [types_1.SIZE_TYPES.HALF, types_1.SIZE_TYPES.TWO_VERTICAL_ONE_HORISONTAL_HALF, types_1.SIZE_TYPES.TWO_VERTICAL_ONE_HORISONTAL_HALF, types_1.SIZE_TYPES.TWO_VERTICAL_ONE_HORISONTAL_HALF],
    _c[types_1.SIZE_CODES.F1H2] = [types_1.SIZE_TYPES.HALF, types_1.SIZE_TYPES.TWO_HORISONTAL_HALF, types_1.SIZE_TYPES.TWO_HORISONTAL_HALF],
    _c[types_1.SIZE_CODES.F1V4] = [types_1.SIZE_TYPES.HALF, types_1.SIZE_TYPES.FOUR_VERTICAL_HALF, types_1.SIZE_TYPES.FOUR_VERTICAL_HALF, types_1.SIZE_TYPES.FOUR_VERTICAL_HALF, types_1.SIZE_TYPES.FOUR_VERTICAL_HALF,],
    _c[types_1.SIZE_CODES.XXLF1V2] = [types_1.SIZE_TYPES.THREE_QUARTERS, types_1.SIZE_TYPES.TWO_VERTICAL_CUSTOM, types_1.SIZE_TYPES.TWO_VERTICAL_CUSTOM],
    _c[types_1.SIZE_CODES.VIGNETTE] = [types_1.SIZE_TYPES.FULL],
    _c);
exports.PADDINGS = (_d = {},
    _d[types_1.SIZE_TYPES.HALF] = {
        xPadding: 0,
        yPadding: 0,
    },
    _d[types_1.SIZE_TYPES.HALF_CUTTED] = {
        xPadding: 186,
        yPadding: 186,
    },
    _d[types_1.SIZE_TYPES.THREE_QUARTERS] = {
        xPadding: 186,
        yPadding: 186,
        innerPadding: 50
    },
    _d[types_1.SIZE_TYPES.THREE_HORISONTAL_HALF] = {
        xPadding: 433,
        yPadding: 83.5,
    },
    _d[types_1.SIZE_TYPES.FOUR_HORISONTAL_FULL] = {
        xPadding: 186,
        yPadding: 186,
        innerPadding: 50
    },
    _d[types_1.SIZE_TYPES.TWO_VERTICAL_ONE_HORISONTAL_HALF] = {
        xPadding: 186,
        yPadding: 186,
        innerPadding: 50
    },
    _d[types_1.SIZE_TYPES.TWO_HORISONTAL_HALF] = {
        xPadding: 186,
        yPadding: 186,
        innerPadding: 50
    },
    _d[types_1.SIZE_TYPES.FOUR_VERTICAL_HALF] = {
        xPadding: 186,
        yPadding: 186,
        innerPadding: 50
    },
    _d[types_1.SIZE_TYPES.TWO_VERTICAL_CUSTOM] = {
        xPadding: 186,
        yPadding: 186,
        innerPadding: 50
    },
    _d[types_1.SIZE_TYPES.COVER] = {
        xPadding: 3244,
        yPadding: 777,
        innerPadding: 50
    },
    _d[types_1.SIZE_TYPES.FULL] = {
        xPadding: 0,
        yPadding: 0,
    },
    _d[types_1.SIZE_TYPES.VIGNETTE] = {
        xPadding: 0,
        yPadding: 0,
    },
    _d);
