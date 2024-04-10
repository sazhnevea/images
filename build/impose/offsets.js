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
exports.getOffsets = void 0;
var constants_js_1 = require("../constants.js");
var types_js_1 = require("./types.js");
var getOffsets = function (updatedWidth, updatedHeight, sizeType, layoutWidth, layoutHeight, order, pagesAmount, step) { return __awaiter(void 0, void 0, void 0, function () {
    var leftOffset, topOffset, _a, xPadding, yPadding, innerPadding, leftSpace, leftSpace;
    return __generator(this, function (_b) {
        leftOffset = 0;
        topOffset = 0;
        _a = constants_js_1.PADDINGS[sizeType], xPadding = _a.xPadding, yPadding = _a.yPadding, innerPadding = _a.innerPadding;
        switch (sizeType) {
            case types_js_1.SIZE_TYPES.HALF: {
                leftOffset = 0;
                topOffset = 0;
                break;
            }
            case types_js_1.SIZE_TYPES.THREE_QUARTERS: {
                leftOffset = 0;
                topOffset = topOffset + constants_js_1.CUT_OFF + yPadding;
                break;
            }
            case types_js_1.SIZE_TYPES.HALF_CUTTED: {
                leftSpace = layoutWidth.minusMargins().getHalf() - updatedWidth;
                leftOffset = layoutWidth.minusMargin() - updatedWidth - (leftSpace / 2);
                topOffset = topOffset.plusMargin() + yPadding;
                break;
            }
            case types_js_1.SIZE_TYPES.THREE_HORISONTAL_HALF: {
                leftSpace = layoutWidth.minusMargins().getHalf() - updatedWidth;
                leftOffset = layoutWidth.minusMargin() - updatedWidth - (leftSpace / 2);
                topOffset = Math.round(topOffset.plusMargin() + yPadding);
                if (order >= 2) {
                    topOffset = Math.round(topOffset + updatedHeight + yPadding);
                }
                if (order >= 3) {
                    topOffset = Math.round(topOffset + updatedHeight + yPadding);
                }
                break;
            }
            case types_js_1.SIZE_TYPES.FOUR_HORISONTAL_FULL: {
                if (innerPadding) {
                    if (order === 0) {
                        leftOffset = layoutWidth.getHalf() - (innerPadding / 2) - updatedWidth;
                        topOffset = Math.round(topOffset.plusMargin() + yPadding);
                    }
                    if (order === 1) {
                        leftOffset = layoutWidth.getHalf() - (innerPadding / 2) - updatedWidth;
                        topOffset = Math.round(Math.round(topOffset.plusMargin() + yPadding) + updatedHeight + innerPadding);
                    }
                    if (order === 2) {
                        leftOffset = layoutWidth.getHalf() + (innerPadding / 2);
                        topOffset = Math.round(topOffset.plusMargin() + yPadding);
                    }
                    if (order === 3) {
                        leftOffset = layoutWidth.getHalf() + (innerPadding / 2);
                        topOffset = Math.round(Math.round(topOffset.plusMargin() + yPadding) + updatedHeight + innerPadding);
                    }
                }
                else {
                    console.log('Inner padding is not defined for' + ' ' + sizeType);
                }
                break;
            }
            case types_js_1.SIZE_TYPES.TWO_VERTICAL_ONE_HORISONTAL_HALF: {
                if (order === 1) {
                    leftOffset = layoutWidth.getHalf() + xPadding;
                    topOffset = Math.round(topOffset.plusMargin() + yPadding);
                }
                if (order === 2) {
                    if (innerPadding) {
                        leftOffset = layoutWidth.getHalf() + xPadding + updatedWidth + innerPadding;
                    }
                    else {
                        console.log('Inner padding is not defined for' + ' ' + sizeType);
                    }
                    topOffset = Math.round(topOffset.plusMargin() + yPadding);
                }
                if (order === 3) {
                    leftOffset = layoutWidth.getHalf() + xPadding;
                    topOffset = Math.round(layoutHeight.minusMargin() - yPadding - updatedHeight);
                }
                break;
            }
            case types_js_1.SIZE_TYPES.TWO_HORISONTAL_HALF: {
                leftOffset = layoutWidth.getHalf() + xPadding;
                if (order === 1) {
                    topOffset = Math.round(topOffset.plusMargin() + yPadding);
                }
                if (order === 2) {
                    if (innerPadding) {
                        topOffset = Math.round(topOffset.plusMargin() + yPadding + updatedHeight + innerPadding);
                    }
                    else {
                        console.log('Inner padding is not defined for' + ' ' + sizeType);
                    }
                }
                break;
            }
            case types_js_1.SIZE_TYPES.FOUR_VERTICAL_HALF: {
                if (order === 1) {
                    leftOffset = layoutWidth.getHalf() + xPadding;
                    topOffset = Math.round(topOffset.plusMargin() + yPadding);
                }
                if (order === 2) {
                    if (innerPadding) {
                        leftOffset = layoutWidth.getHalf() + xPadding + updatedWidth + innerPadding;
                    }
                    else {
                        console.log('Inner padding is not defined for' + ' ' + sizeType);
                    }
                    topOffset = Math.round(topOffset.plusMargin() + yPadding);
                }
                if (order === 3) {
                    leftOffset = layoutWidth.getHalf() + xPadding;
                    topOffset = Math.round(layoutHeight.minusMargin() - yPadding - updatedHeight);
                }
                if (order === 4) {
                    if (innerPadding) {
                        leftOffset = layoutWidth.getHalf() + xPadding + updatedWidth + innerPadding;
                    }
                    else {
                        console.log('Inner padding is not defined for' + ' ' + sizeType);
                    }
                    topOffset = Math.round(layoutHeight.minusMargin() - yPadding - updatedHeight);
                }
                break;
            }
            case types_js_1.SIZE_TYPES.TWO_VERTICAL_CUSTOM: {
                leftOffset = layoutWidth - constants_js_1.CUT_OFF - xPadding - updatedWidth;
                if (order === 1) {
                    topOffset = Math.round(topOffset.plusMargin() + yPadding);
                }
                if (order === 2) {
                    if (innerPadding) {
                        topOffset = Math.round(topOffset.plusMargin() + yPadding + updatedHeight + innerPadding);
                    }
                    else {
                        console.log('Inner padding is not defined for' + ' ' + sizeType);
                    }
                }
                break;
            }
            case types_js_1.SIZE_TYPES.COVER: {
                if (pagesAmount && step) {
                    leftOffset = constants_js_1.CUT_OFF + xPadding + ((pagesAmount - 1) * step);
                }
                else {
                    console.log("pagesAmount or step is not defined. pagesAmount value is ".concat(pagesAmount, ". step value is ").concat(step));
                }
                topOffset = Math.round(topOffset.plusMargin() + yPadding);
                break;
            }
            default:
                break;
        }
        return [2 /*return*/, { leftOffset: leftOffset, topOffset: topOffset }];
    });
}); };
exports.getOffsets = getOffsets;
