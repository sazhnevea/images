"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateLeftOffsetBasedOnPagesAmount = exports.getAlbumName = exports.getDirection = exports.getImageName = exports.getLayoutType = exports.parseNumberArray = exports.getNumberStrings = exports.createFolder = void 0;
var fs_1 = require("fs");
var constants_js_1 = require("../constants.js");
var createFolder = function (folderName) {
    (0, fs_1.access)(folderName, fs_1.constants.F_OK, function (err) {
        if (err) {
            (0, fs_1.mkdir)(folderName, function (mkdirErr) {
                if (mkdirErr) {
                    console.log('Error creating output folder:', mkdirErr);
                }
                else {
                    console.log("".concat(folderName, " folder created successfully!"));
                }
            });
        }
        else {
            console.log("".concat(folderName, " folder already exists!"));
        }
    });
};
exports.createFolder = createFolder;
var getNumberStrings = function (string) { var _a; return (_a = string.match(/[-]{0,1}[\d]*[\\.]{0,1}[\d]+/g)) === null || _a === void 0 ? void 0 : _a.map(Number); };
exports.getNumberStrings = getNumberStrings;
var parseNumberArray = function (numberStrings) { return numberStrings.map(Number); };
exports.parseNumberArray = parseNumberArray;
var getLayoutType = function (object, value) {
    return Object.keys(object).find(function (key) { return object[key] === value; });
};
exports.getLayoutType = getLayoutType;
var getImageName = function (photoNumber) { return "".concat(photoNumber, ".jpg"); };
exports.getImageName = getImageName;
var getDirection = function (width, height) { return width > height ? constants_js_1.DIRECTION.H : constants_js_1.DIRECTION.V; };
exports.getDirection = getDirection;
var getAlbumName = function (rowData) {
    return rowData[constants_js_1.ALBUM_NAME_FIELD];
};
exports.getAlbumName = getAlbumName;
var calculateLeftOffsetBasedOnPagesAmount = function (pagesAmount, step) {
    return (pagesAmount - 1) * step;
};
exports.calculateLeftOffsetBasedOnPagesAmount = calculateLeftOffsetBasedOnPagesAmount;
