"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PADDINGS = exports.LAYOUT_TYPE_MAPPING = exports.LAYOUT_TYPE_DIRECTION_MAPPING = exports.ALBUM_NAMES_DATA = exports.ALBUM_NAME_FIELD = exports.CUT_OFF = exports.LAYOUT_PATH = exports.CSVPathSort = exports.CSVPathImpose = exports.SOURCE_SORT_FOLDER_NAME = exports.RETOUCH_FOLDER_NAME = exports.RESULT = exports.IMPOSE_FOLDER_NAME = exports.DATA_FOLDER_NAME = exports.ALBUMS_FOLDER_NAME = exports.ASSETS_FOLDER_NAME = void 0;
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
exports.ALBUM_NAMES_DATA = (_a = {},
    _a[types_1.ALBUM_NAME.OUR_KINDERGARTEN] = {
        name: types_1.ALBUM_NAME.OUR_KINDERGARTEN,
        layoutsData: (_b = {},
            _b[types_1.LAYOUT_TYPE.COVER] = {
                layoutPathFolder: "".concat(exports.ASSETS_FOLDER_NAME, "/").concat(exports.ALBUMS_FOLDER_NAME, "/ourKingergarten/layouts/"),
                step: 12,
                decorations: [
                    {
                        name: 'sun.png',
                        path: "".concat(exports.ASSETS_FOLDER_NAME, "/").concat(exports.ALBUMS_FOLDER_NAME, "/ourKingergarten/decorations/"),
                        offsets: {
                            left: 2922,
                            top: 1550,
                        }
                    },
                    {
                        name: 'frame.png',
                        path: "".concat(exports.ASSETS_FOLDER_NAME, "/").concat(exports.ALBUMS_FOLDER_NAME, "/ourKingergarten/decorations/"),
                        offsets: {
                            left: 3126,
                            top: 718,
                        }
                    },
                ]
            },
            _b)
    },
    _a);
exports.LAYOUT_TYPE_DIRECTION_MAPPING = (_c = {},
    _c[types_1.LAYOUT_TYPE.COVER] = [types_1.DIRECTION.V],
    _c[types_1.LAYOUT_TYPE.FULL] = [types_1.DIRECTION.H],
    _c[types_1.LAYOUT_TYPE.F1C1] = [types_1.DIRECTION.V, types_1.DIRECTION.V],
    _c[types_1.LAYOUT_TYPE.F1H3] = [types_1.DIRECTION.V, types_1.DIRECTION.H, types_1.DIRECTION.H, types_1.DIRECTION.H],
    _c[types_1.LAYOUT_TYPE.H4] = [types_1.DIRECTION.H, types_1.DIRECTION.H, types_1.DIRECTION.H, types_1.DIRECTION.H],
    _c[types_1.LAYOUT_TYPE.F1V2H1] = [types_1.DIRECTION.V, types_1.DIRECTION.V, types_1.DIRECTION.V, types_1.DIRECTION.H],
    _c[types_1.LAYOUT_TYPE.F1H2] = [types_1.DIRECTION.V, types_1.DIRECTION.H, types_1.DIRECTION.H],
    _c[types_1.LAYOUT_TYPE.F1V4] = [types_1.DIRECTION.V, types_1.DIRECTION.V, types_1.DIRECTION.V, types_1.DIRECTION.V, types_1.DIRECTION.V],
    _c[types_1.LAYOUT_TYPE.XXLF1V2] = [types_1.DIRECTION.H, types_1.DIRECTION.V, types_1.DIRECTION.V],
    _c[types_1.LAYOUT_TYPE.VIGNETTE] = [types_1.DIRECTION.V],
    _c);
exports.LAYOUT_TYPE_MAPPING = {
    FULL: [types_1.SIZE_TYPE.FULL],
    COVER: [types_1.SIZE_TYPE.COVER],
    F1C1: [types_1.SIZE_TYPE.HALF, types_1.SIZE_TYPE.HALF_CUTTED],
    F1H3: [types_1.SIZE_TYPE.HALF, types_1.SIZE_TYPE.THREE_HORISONTAL_HALF, types_1.SIZE_TYPE.THREE_HORISONTAL_HALF, types_1.SIZE_TYPE.THREE_HORISONTAL_HALF],
    H4: [types_1.SIZE_TYPE.FOUR_HORISONTAL_FULL, types_1.SIZE_TYPE.FOUR_HORISONTAL_FULL, types_1.SIZE_TYPE.FOUR_HORISONTAL_FULL, types_1.SIZE_TYPE.FOUR_HORISONTAL_FULL],
    F1V2H1: [types_1.SIZE_TYPE.HALF, types_1.SIZE_TYPE.TWO_VERTICAL_ONE_HORISONTAL_HALF, types_1.SIZE_TYPE.TWO_VERTICAL_ONE_HORISONTAL_HALF, types_1.SIZE_TYPE.TWO_VERTICAL_ONE_HORISONTAL_HALF],
    F1H2: [types_1.SIZE_TYPE.HALF, types_1.SIZE_TYPE.TWO_HORISONTAL_HALF, types_1.SIZE_TYPE.TWO_HORISONTAL_HALF],
    F1V4: [types_1.SIZE_TYPE.HALF, types_1.SIZE_TYPE.FOUR_VERTICAL_HALF, types_1.SIZE_TYPE.FOUR_VERTICAL_HALF, types_1.SIZE_TYPE.FOUR_VERTICAL_HALF, types_1.SIZE_TYPE.FOUR_VERTICAL_HALF,],
    XXLF1V2: [types_1.SIZE_TYPE.THREE_QUARTERS, types_1.SIZE_TYPE.TWO_VERTICAL_CUSTOM, types_1.SIZE_TYPE.TWO_VERTICAL_CUSTOM],
    VIGNETTE: [types_1.SIZE_TYPE.FULL],
};
exports.PADDINGS = (_d = {},
    _d[types_1.SIZE_TYPE.HALF] = {
        xPadding: 0,
        yPadding: 0,
    },
    _d[types_1.SIZE_TYPE.HALF_CUTTED] = {
        xPadding: 186,
        yPadding: 186,
    },
    _d[types_1.SIZE_TYPE.THREE_QUARTERS] = {
        xPadding: 186,
        yPadding: 186,
        innerPadding: 50
    },
    _d[types_1.SIZE_TYPE.THREE_HORISONTAL_HALF] = {
        xPadding: 433,
        yPadding: 83.5,
    },
    _d[types_1.SIZE_TYPE.FOUR_HORISONTAL_FULL] = {
        xPadding: 186,
        yPadding: 186,
        innerPadding: 50
    },
    _d[types_1.SIZE_TYPE.TWO_VERTICAL_ONE_HORISONTAL_HALF] = {
        xPadding: 186,
        yPadding: 186,
        innerPadding: 50
    },
    _d[types_1.SIZE_TYPE.TWO_HORISONTAL_HALF] = {
        xPadding: 186,
        yPadding: 186,
        innerPadding: 50
    },
    _d[types_1.SIZE_TYPE.FOUR_VERTICAL_HALF] = {
        xPadding: 186,
        yPadding: 186,
        innerPadding: 50
    },
    _d[types_1.SIZE_TYPE.TWO_VERTICAL_CUSTOM] = {
        xPadding: 186,
        yPadding: 186,
        innerPadding: 50
    },
    _d[types_1.SIZE_TYPE.COVER] = {
        xPadding: 3244,
        yPadding: 777,
        innerPadding: 50
    },
    _d[types_1.SIZE_TYPE.FULL] = {
        xPadding: 0,
        yPadding: 0,
    },
    _d);
