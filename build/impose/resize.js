"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resizePhoto = void 0;
var constants_js_1 = require("../constants.js");
var types_js_1 = require("./types.js");
var resizePhoto = function (photo, sizeType, layoutWidth, layoutHeight, order) { return __awaiter(void 0, void 0, void 0, function () {
    var resizedPhoto, updatedWidth, updatedHeight, _a, xPadding, yPadding, innerPadding, doubleYPadding, doubleXPadding, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = constants_js_1.PADDINGS[sizeType], xPadding = _a.xPadding, yPadding = _a.yPadding, innerPadding = _a.innerPadding;
                doubleYPadding = yPadding * 2;
                doubleXPadding = xPadding * 2;
                console.log('sizeType', sizeType);
                _b = sizeType;
                switch (_b) {
                    case types_js_1.SIZE_TYPES.HALF: return [3 /*break*/, 1];
                    case types_js_1.SIZE_TYPES.THREE_QUARTERS: return [3 /*break*/, 3];
                    case types_js_1.SIZE_TYPES.HALF_CUTTED: return [3 /*break*/, 5];
                    case types_js_1.SIZE_TYPES.THREE_HORISONTAL_HALF: return [3 /*break*/, 7];
                    case types_js_1.SIZE_TYPES.FOUR_HORISONTAL_FULL: return [3 /*break*/, 9];
                    case types_js_1.SIZE_TYPES.TWO_VERTICAL_ONE_HORISONTAL_HALF: return [3 /*break*/, 11];
                    case types_js_1.SIZE_TYPES.TWO_HORISONTAL_HALF: return [3 /*break*/, 16];
                    case types_js_1.SIZE_TYPES.FOUR_VERTICAL_HALF: return [3 /*break*/, 18];
                    case types_js_1.SIZE_TYPES.TWO_VERTICAL_CUSTOM: return [3 /*break*/, 20];
                    case types_js_1.SIZE_TYPES.COVER: return [3 /*break*/, 22];
                }
                return [3 /*break*/, 24];
            case 1:
                updatedWidth = layoutWidth.getHalf();
                updatedHeight = layoutHeight;
                return [4 /*yield*/, photo.resize(updatedWidth, updatedHeight).sharpen()];
            case 2:
                resizedPhoto = _c.sent();
                return [3 /*break*/, 25];
            case 3:
                if (innerPadding) {
                    updatedWidth = Math.round((layoutWidth - (constants_js_1.CUT_OFF * 2) - xPadding - innerPadding) * 0.80 + constants_js_1.CUT_OFF);
                }
                else {
                    console.log('Inner padding is not defined for' + ' ' + sizeType);
                }
                updatedHeight = layoutHeight.minusMargins() - doubleYPadding;
                return [4 /*yield*/, photo.resize(updatedWidth, updatedHeight).sharpen()];
            case 4:
                resizedPhoto = _c.sent();
                return [3 /*break*/, 25];
            case 5:
                updatedWidth = layoutWidth.getHalf().minusMargins() - doubleXPadding;
                updatedHeight = layoutHeight.minusMargins() - doubleYPadding;
                return [4 /*yield*/, photo.resize(updatedWidth, updatedHeight).sharpen({ sigma: 1 })];
            case 6:
                resizedPhoto = _c.sent();
                return [3 /*break*/, 25];
            case 7:
                updatedWidth = Math.round(layoutWidth.getHalf().minusMargins()) - (doubleXPadding);
                updatedHeight = Math.round((layoutHeight.minusMargins() - (doubleYPadding * 2)) / 3);
                return [4 /*yield*/, photo.resize(updatedWidth, updatedHeight).sharpen({ sigma: 1 })];
            case 8:
                resizedPhoto = _c.sent();
                return [3 /*break*/, 25];
            case 9:
                updatedWidth = Math.round(layoutWidth.getHalf().minusMargins()) - xPadding;
                if (innerPadding) {
                    updatedHeight = Math.round((layoutHeight.minusMargins() - (doubleYPadding) - innerPadding) / 2);
                }
                else {
                    console.log('Inner padding is not defined for' + ' ' + sizeType);
                }
                return [4 /*yield*/, photo.resize(updatedWidth, updatedHeight).sharpen({ sigma: 1 })];
            case 10:
                resizedPhoto = _c.sent();
                return [3 /*break*/, 25];
            case 11:
                if (!(order === 1 || order === 2)) return [3 /*break*/, 13];
                if (innerPadding) {
                    updatedWidth = Math.round((layoutWidth.getHalf().minusMargin() - doubleXPadding - innerPadding) / 2);
                    updatedHeight = Math.round((layoutHeight.minusMargins() - (doubleYPadding) - innerPadding) / 2);
                }
                else {
                    console.log('Inner padding is not defined for' + ' ' + sizeType);
                }
                return [4 /*yield*/, photo.resize(updatedWidth, updatedHeight).sharpen({ sigma: 1 })];
            case 12:
                resizedPhoto = _c.sent();
                _c.label = 13;
            case 13:
                if (!(order === 3)) return [3 /*break*/, 15];
                updatedWidth = Math.round(layoutWidth.getHalf().minusMargin()) - doubleXPadding;
                if (innerPadding) {
                    updatedHeight = Math.round((layoutHeight.minusMargins() - (doubleYPadding) - innerPadding) / 2);
                }
                else {
                    console.log('Inner padding is not defined for' + ' ' + sizeType);
                }
                return [4 /*yield*/, photo.resize(updatedWidth, updatedHeight).sharpen({ sigma: 1 })];
            case 14:
                resizedPhoto = _c.sent();
                _c.label = 15;
            case 15: return [3 /*break*/, 25];
            case 16:
                updatedWidth = Math.round(layoutWidth.getHalf().minusMargin()) - doubleXPadding;
                if (innerPadding) {
                    updatedHeight = Math.round((layoutHeight.minusMargins() - (doubleYPadding) - innerPadding) / 2);
                }
                else {
                    console.log('Inner padding is not defined for' + ' ' + sizeType);
                }
                return [4 /*yield*/, photo.resize(updatedWidth, updatedHeight).sharpen({ sigma: 1 })];
            case 17:
                resizedPhoto = _c.sent();
                return [3 /*break*/, 25];
            case 18:
                if (innerPadding) {
                    updatedWidth = Math.round((layoutWidth.getHalf().minusMargin() - doubleXPadding - innerPadding) / 2);
                    updatedHeight = Math.round((layoutHeight.minusMargins() - (doubleYPadding) - innerPadding) / 2);
                }
                else {
                    console.log('Inner padding is not defined for' + ' ' + sizeType);
                }
                return [4 /*yield*/, photo.resize(updatedWidth, updatedHeight).sharpen({ sigma: 1 })];
            case 19:
                resizedPhoto = _c.sent();
                return [3 /*break*/, 25];
            case 20:
                if (innerPadding) {
                    updatedWidth = Math.round((layoutWidth - (constants_js_1.CUT_OFF * 2) - xPadding - innerPadding) * 0.20);
                    updatedHeight = Math.round((layoutHeight.minusMargins() - (doubleYPadding) - innerPadding) / 2);
                }
                else {
                    console.log('Inner padding is not defined for' + ' ' + sizeType);
                }
                return [4 /*yield*/, photo.resize(updatedWidth, updatedHeight).sharpen({ sigma: 1 })];
            case 21:
                resizedPhoto = _c.sent();
                return [3 /*break*/, 25];
            case 22:
                updatedWidth = 1359;
                updatedHeight = 2040;
                return [4 /*yield*/, photo.resize(updatedWidth, updatedHeight).sharpen({ sigma: 1 })];
            case 23:
                resizedPhoto = _c.sent();
                return [3 /*break*/, 25];
            case 24:
                resizedPhoto = photo;
                return [3 /*break*/, 25];
            case 25: return [2 /*return*/, { resizedPhoto: resizedPhoto, updatedWidth: updatedWidth, updatedHeight: updatedHeight }];
        }
    });
}); };
exports.resizePhoto = resizePhoto;
