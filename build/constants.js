"use strict";
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PADDINGS = exports.LAYOUT_TYPE_SIZES_MAPPING = exports.ALBUM_DATA = exports.DIRECTION = exports.ALBUM_NAME_FIELD = exports.CUT_OFF = exports.CSVPathSort = exports.CSVPathImpose = exports.SOURCE_SORT_FOLDER_NAME = exports.RETOUCH_FOLDER_NAME = exports.RESULT = exports.IMPOSE_FOLDER_NAME = exports.DATA_FOLDER_NAME = exports.ALBUMS_FOLDER_NAME = exports.ASSETS_FOLDER_NAME = void 0;
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
exports.CUT_OFF = 24;
exports.ALBUM_NAME_FIELD = 'Название альбома';
exports.DIRECTION = {
    V: 'verical',
    H: 'horisontal',
};
var PHOTO_SIZES_DATA = (_a = {},
    _a[types_1.SIZE_TYPES.FULL] = {
        width: 4772,
        height: 3472,
    },
    _a[types_1.SIZE_TYPES.HALF] = {
        width: 2386,
        height: 3472,
    },
    _a[types_1.SIZE_TYPES.HALF_CUTTED] = {
        width: 1966,
        height: 3052,
    },
    _a[types_1.SIZE_TYPES.COVER] = {
        width: 1359,
        height: 2040,
    },
    _a[types_1.SIZE_TYPES.TWO_HORISONTAL_HALF] = {
        width: 1990,
        height: 1501,
    },
    _a[types_1.SIZE_TYPES.THREE_HORISONTAL_HALF] = {
        width: 1472,
        height: 1030,
    },
    _a[types_1.SIZE_TYPES.FOUR_HORISONTAL_FULL] = {
        width: 2152,
        height: 1501,
    },
    _a);
exports.ALBUM_DATA = (_b = {},
    _b[types_1.ALBUM_NAMES.ourKingergarten] = {
        name: types_1.ALBUM_NAMES.ourKingergarten,
        layouts: (_c = {},
            _c[types_1.LAYOUT_TYPE.COVER] = {
                name: "1.jpg",
                layoutPathFolder: "".concat(exports.ASSETS_FOLDER_NAME, "/").concat(exports.ALBUMS_FOLDER_NAME, "/ourKingergarten/").concat(types_1.LAYOUT_TYPE.COVER, "/"),
                photosSizeAndOffsetsDataInOrder: [{
                        width: 1359,
                        height: 2040,
                        left: 3388,
                        top: 651,
                    }],
                step: 12,
                decoration: {
                    name: 'decoration.png',
                    path: "".concat(exports.ASSETS_FOLDER_NAME, "/").concat(exports.ALBUMS_FOLDER_NAME, "/ourKingergarten/").concat(types_1.LAYOUT_TYPE.COVER, "/"),
                    offsets: {
                        left: 2980,
                        top: 568,
                    }
                },
            },
            _c[types_1.LAYOUT_TYPE.F1C1] = {
                name: '1.jpg',
                layoutPathFolder: "".concat(exports.ASSETS_FOLDER_NAME, "/").concat(exports.ALBUMS_FOLDER_NAME, "/ourKingergarten/").concat(types_1.LAYOUT_TYPE.F1C1, "/"),
                photosSizeAndOffsetsDataInOrder: [
                    {
                        width: 2386,
                        height: 3472,
                        left: 0,
                        top: 0,
                    },
                    {
                        width: 1966,
                        height: 3052,
                        left: 2584,
                        top: 210,
                    },
                ],
            },
            _c[types_1.LAYOUT_TYPE.F1H3] = {
                name: '1.jpg',
                layoutPathFolder: "".concat(exports.ASSETS_FOLDER_NAME, "/").concat(exports.ALBUMS_FOLDER_NAME, "/ourKingergarten/").concat(types_1.LAYOUT_TYPE.F1H3, "/"),
                photosSizeAndOffsetsDataInOrder: [
                    {
                        width: 2386,
                        height: 3472,
                        left: 0,
                        top: 0,
                    },
                    {
                        width: 1472,
                        height: 1030,
                        left: 2831,
                        top: 108,
                    },
                    {
                        width: 1472,
                        height: 1030,
                        left: 2831,
                        top: 1222,
                    },
                    {
                        width: 1472,
                        height: 1030,
                        left: 2831,
                        top: 2336,
                    },
                ],
            },
            _c[types_1.LAYOUT_TYPE.H4] = {
                name: '1.jpg',
                layoutPathFolder: "".concat(exports.ASSETS_FOLDER_NAME, "/").concat(exports.ALBUMS_FOLDER_NAME, "/ourKingergarten/").concat(types_1.LAYOUT_TYPE.H4, "/"),
                photosSizeAndOffsetsDataInOrder: [
                    {
                        width: 2152,
                        height: 1501,
                        left: 209,
                        top: 210,
                    },
                    {
                        width: 2152,
                        height: 1501,
                        left: 209,
                        top: 1761,
                    },
                    {
                        width: 2152,
                        height: 1501,
                        left: 2411,
                        top: 210,
                    },
                    {
                        width: 2152,
                        height: 1501,
                        left: 2411,
                        top: 1761,
                    },
                ],
            },
            _c[types_1.LAYOUT_TYPE.F1V2H1] = {
                name: '1.jpg',
                layoutPathFolder: "".concat(exports.ASSETS_FOLDER_NAME, "/").concat(exports.ALBUMS_FOLDER_NAME, "/ourKingergarten/").concat(types_1.LAYOUT_TYPE.F1V2H1, "/"),
                photosSizeAndOffsetsDataInOrder: [
                    {
                        width: 2386,
                        height: 3472,
                        left: 0,
                        top: 0,
                    },
                    {
                        width: 970,
                        height: 1501,
                        left: 2572,
                        top: 210,
                    },
                    {
                        width: 970,
                        height: 1501,
                        left: 3592,
                        top: 210,
                    },
                    {
                        width: 1990,
                        height: 1501,
                        left: 2572,
                        top: 1761,
                    },
                ],
            },
            _c[types_1.LAYOUT_TYPE.F1H2] = {
                name: '1.jpg',
                layoutPathFolder: "".concat(exports.ASSETS_FOLDER_NAME, "/").concat(exports.ALBUMS_FOLDER_NAME, "/ourKingergarten/").concat(types_1.LAYOUT_TYPE.F1H2, "/"),
                photosSizeAndOffsetsDataInOrder: [
                    {
                        width: 2386,
                        height: 3472,
                        left: 0,
                        top: 0,
                    },
                    {
                        width: 970,
                        height: 1501,
                        left: 2572,
                        top: 210,
                    },
                    {
                        width: 970,
                        height: 1501,
                        left: 2572,
                        top: 1761,
                    },
                ],
            },
            _c[types_1.LAYOUT_TYPE.F1V4] = {
                name: '1.jpg',
                layoutPathFolder: "".concat(exports.ASSETS_FOLDER_NAME, "/").concat(exports.ALBUMS_FOLDER_NAME, "/ourKingergarten/").concat(types_1.LAYOUT_TYPE.F1V4, "/"),
                photosSizeAndOffsetsDataInOrder: [
                    {
                        width: 2386,
                        height: 3472,
                        left: 0,
                        top: 0,
                    },
                    {
                        width: 970,
                        height: 1501,
                        left: 2572,
                        top: 210,
                    },
                    {
                        width: 970,
                        height: 1501,
                        left: 3626,
                        top: 210,
                    },
                    {
                        width: 1990,
                        height: 1501,
                        left: 2572,
                        top: 1761,
                    },
                    {
                        width: 1990,
                        height: 1501,
                        left: 3592,
                        top: 1761,
                    },
                ],
            },
            _c[types_1.LAYOUT_TYPE.XXLF1V2] = {
                name: '1.jpg',
                layoutPathFolder: "".concat(exports.ASSETS_FOLDER_NAME, "/").concat(exports.ALBUMS_FOLDER_NAME, "/ourKingergarten/").concat(types_1.LAYOUT_TYPE.XXLF1V2, "/"),
                photosSizeAndOffsetsDataInOrder: [
                    {
                        width: 970,
                        height: 1501,
                        left: 0,
                        top: 0,
                    },
                    {
                        width: 970,
                        height: 1501,
                        left: 3664,
                        top: 210,
                    },
                    {
                        width: 1990,
                        height: 1501,
                        left: 3664,
                        top: 1761,
                    },
                ],
            },
            _c[types_1.LAYOUT_TYPE.F1V2] = {
                name: '1.jpg',
                layoutPathFolder: "".concat(exports.ASSETS_FOLDER_NAME, "/").concat(exports.ALBUMS_FOLDER_NAME, "/ourKingergarten/").concat(types_1.LAYOUT_TYPE.F1V2, "/"),
                photosSizeAndOffsetsDataInOrder: [
                    {
                        width: 2386,
                        height: 3472,
                        left: 0,
                        top: 0,
                    },
                    {
                        width: 970,
                        height: 1501,
                        left: 2572,
                        top: 986,
                    },
                    {
                        width: 970,
                        height: 1501,
                        left: 3592,
                        top: 986,
                    },
                ],
            },
            _c[types_1.LAYOUT_TYPE.VIGNETTE] = {
                name: '1.jpg',
                layoutPathFolder: "".concat(exports.ASSETS_FOLDER_NAME, "/").concat(exports.ALBUMS_FOLDER_NAME, "/ourKingergarten/").concat(types_1.LAYOUT_TYPE.VIGNETTE, "/"),
                photosSizeAndOffsetsDataInOrder: [
                    {
                        width: 4772,
                        height: 3472,
                        left: 0,
                        top: 0
                    }
                ],
            },
            _c[types_1.LAYOUT_TYPE.FULL] = {
                name: '1.jpg',
                layoutPathFolder: "".concat(exports.ASSETS_FOLDER_NAME, "/").concat(exports.ALBUMS_FOLDER_NAME, "/ourKingergarten/").concat(types_1.LAYOUT_TYPE.FULL, "/"),
                photosSizeAndOffsetsDataInOrder: [{
                        width: 4772,
                        height: 3472,
                        left: 0,
                        top: 0
                    }],
            },
            _c)
    },
    _b);
exports.LAYOUT_TYPE_SIZES_MAPPING = (_d = {},
    _d[types_1.LAYOUT_TYPE.FULL] = [types_1.SIZE_TYPES.FULL],
    _d[types_1.LAYOUT_TYPE.COVER] = [types_1.SIZE_TYPES.COVER],
    _d[types_1.LAYOUT_TYPE.F1C1] = [types_1.SIZE_TYPES.HALF, types_1.SIZE_TYPES.HALF_CUTTED],
    _d[types_1.LAYOUT_TYPE.F1H3] = [types_1.SIZE_TYPES.HALF, types_1.SIZE_TYPES.THREE_HORISONTAL_HALF, types_1.SIZE_TYPES.THREE_HORISONTAL_HALF, types_1.SIZE_TYPES.THREE_HORISONTAL_HALF],
    _d[types_1.LAYOUT_TYPE.H4] = [types_1.SIZE_TYPES.FOUR_HORISONTAL_FULL, types_1.SIZE_TYPES.FOUR_HORISONTAL_FULL, types_1.SIZE_TYPES.FOUR_HORISONTAL_FULL, types_1.SIZE_TYPES.FOUR_HORISONTAL_FULL],
    _d[types_1.LAYOUT_TYPE.F1V2H1] = [types_1.SIZE_TYPES.HALF, types_1.SIZE_TYPES.TWO_VERTICAL_ONE_HORISONTAL_HALF, types_1.SIZE_TYPES.TWO_VERTICAL_ONE_HORISONTAL_HALF, types_1.SIZE_TYPES.TWO_VERTICAL_ONE_HORISONTAL_HALF],
    _d[types_1.LAYOUT_TYPE.F1H2] = [types_1.SIZE_TYPES.HALF, types_1.SIZE_TYPES.TWO_HORISONTAL_HALF, types_1.SIZE_TYPES.TWO_HORISONTAL_HALF],
    _d[types_1.LAYOUT_TYPE.F1V4] = [types_1.SIZE_TYPES.HALF, types_1.SIZE_TYPES.FOUR_VERTICAL_HALF, types_1.SIZE_TYPES.FOUR_VERTICAL_HALF, types_1.SIZE_TYPES.FOUR_VERTICAL_HALF, types_1.SIZE_TYPES.FOUR_VERTICAL_HALF,],
    _d[types_1.LAYOUT_TYPE.XXLF1V2] = [types_1.SIZE_TYPES.THREE_QUARTERS, types_1.SIZE_TYPES.TWO_VERTICAL_CUSTOM, types_1.SIZE_TYPES.TWO_VERTICAL_CUSTOM],
    _d[types_1.LAYOUT_TYPE.F1V2] = [types_1.SIZE_TYPES.HALF, types_1.SIZE_TYPES.TWO_VERTICAL_RIGHT_CENTER, types_1.SIZE_TYPES.TWO_VERTICAL_RIGHT_CENTER],
    _d[types_1.LAYOUT_TYPE.VIGNETTE] = [types_1.SIZE_TYPES.FULL],
    _d);
exports.PADDINGS = (_e = {},
    _e[types_1.SIZE_TYPES.HALF] = {
        xPadding: 0,
        yPadding: 0,
    },
    _e[types_1.SIZE_TYPES.HALF_CUTTED] = {
        xPadding: 186,
        yPadding: 186,
    },
    _e[types_1.SIZE_TYPES.THREE_QUARTERS] = {
        xPadding: 186,
        yPadding: 186,
        innerPadding: 50
    },
    _e[types_1.SIZE_TYPES.THREE_HORISONTAL_HALF] = {
        xPadding: 433,
        yPadding: 83.5,
    },
    _e[types_1.SIZE_TYPES.FOUR_HORISONTAL_FULL] = {
        xPadding: 186,
        yPadding: 186,
        innerPadding: 50
    },
    _e[types_1.SIZE_TYPES.TWO_VERTICAL_ONE_HORISONTAL_HALF] = {
        xPadding: 186,
        yPadding: 186,
        innerPadding: 50
    },
    _e[types_1.SIZE_TYPES.TWO_HORISONTAL_HALF] = {
        xPadding: 186,
        yPadding: 186,
        innerPadding: 50
    },
    _e[types_1.SIZE_TYPES.FOUR_VERTICAL_HALF] = {
        xPadding: 186,
        yPadding: 186,
        innerPadding: 50
    },
    _e[types_1.SIZE_TYPES.TWO_VERTICAL_CUSTOM] = {
        xPadding: 186,
        yPadding: 186,
        innerPadding: 50
    },
    _e[types_1.SIZE_TYPES.COVER] = {
        xPadding: 3244,
        yPadding: 777,
        innerPadding: 50
    },
    _e[types_1.SIZE_TYPES.FULL] = {
        xPadding: 0,
        yPadding: 0,
    },
    _e[types_1.SIZE_TYPES.TWO_VERTICAL_RIGHT_CENTER] = {
        xPadding: 186,
        yPadding: 186,
        innerPadding: 50
    },
    _e[types_1.SIZE_TYPES.VIGNETTE] = {
        xPadding: 0,
        yPadding: 0,
    },
    _e);
