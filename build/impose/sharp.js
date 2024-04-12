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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.processPhotos = void 0;
var fs_1 = require("fs");
var sharp_1 = __importDefault(require("sharp"));
var path_1 = __importDefault(require("path"));
var constants_js_1 = require("../constants.js");
var resize_js_1 = require("./resize.js");
var offsets_js_1 = require("./offsets.js");
var helper_js_1 = require("./helper.js");
var processPhotos = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var _i, _a, studentData;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _i = 0, _a = data.studentsData;
                _b.label = 1;
            case 1:
                if (!(_i < _a.length)) return [3 /*break*/, 4];
                studentData = _a[_i];
                return [4 /*yield*/, processStudent(studentData)];
            case 2:
                _b.sent();
                _b.label = 3;
            case 3:
                _i++;
                return [3 /*break*/, 1];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.processPhotos = processPhotos;
function processStudent(student) {
    return __awaiter(this, void 0, void 0, function () {
        var name, pages, studentFolderPath;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    name = student.name, pages = student.pages;
                    studentFolderPath = path_1.default.join(constants_js_1.RESULT, constants_js_1.IMPOSE_FOLDER_NAME, name);
                    return [4 /*yield*/, (0, helper_js_1.createStudentFolder)(studentFolderPath)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, Promise.all(pages.map(function (page) { return __awaiter(_this, void 0, void 0, function () {
                            var layoutPath, pageName, destinationPath, layout, _a, layoutWidth, layoutHeight, dataToComposite;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        layoutPath = page.layoutPath, pageName = page.pageName;
                                        destinationPath = "".concat(studentFolderPath, "/").concat(pageName, ".jpg");
                                        layout = (0, sharp_1.default)(layoutPath);
                                        return [4 /*yield*/, layout.metadata()];
                                    case 1:
                                        _a = _b.sent(), layoutWidth = _a.width, layoutHeight = _a.height;
                                        if (!(layoutWidth && layoutHeight)) return [3 /*break*/, 3];
                                        return [4 /*yield*/, processPage(page, layoutWidth, layoutHeight)];
                                    case 2:
                                        dataToComposite = _b.sent();
                                        layout.composite(dataToComposite);
                                        return [3 /*break*/, 4];
                                    case 3:
                                        console.log("layoutWidth or layoutHeight is not defined. layoutWidth value is ".concat(layoutWidth, ".layoutHeight value is ").concat(layoutHeight, "."));
                                        _b.label = 4;
                                    case 4: return [4 /*yield*/, layout.toFile(destinationPath)];
                                    case 5:
                                        _b.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); }))];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function processPage(page, layoutWidth, layoutHeight) {
    return __awaiter(this, void 0, void 0, function () {
        var decoration, photos, pagesAmount, step, dataToComposite, path_2, name, offsets, decorationImage, _a, _b;
        var _c;
        var _this = this;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    decoration = page.decoration, photos = page.photos, pagesAmount = page.pagesAmount, step = page.step;
                    dataToComposite = [];
                    return [4 /*yield*/, Promise.all(photos.map(function (photo, photoOrderNumber) { return __awaiter(_this, void 0, void 0, function () {
                            var path_3, sizeType, imagePath, currentPhoto, _a, resizedPhoto, updatedWidth, updatedHeight, _b, leftOffset, topOffset, _c, _d, err_1;
                            var _e;
                            return __generator(this, function (_f) {
                                switch (_f.label) {
                                    case 0:
                                        _f.trys.push([0, 7, , 8]);
                                        path_3 = photo.path, sizeType = photo.sizeType;
                                        imagePath = "".concat(constants_js_1.DATA_FOLDER_NAME, "/").concat(constants_js_1.RETOUCH_FOLDER_NAME, "/").concat(path_3);
                                        return [4 /*yield*/, fs_1.promises.access(imagePath, fs_1.constants.F_OK)];
                                    case 1:
                                        _f.sent();
                                        currentPhoto = (0, sharp_1.default)(imagePath);
                                        return [4 /*yield*/, (0, resize_js_1.resizePhoto)(currentPhoto, sizeType, layoutWidth, layoutHeight, photoOrderNumber)];
                                    case 2:
                                        _a = _f.sent(), resizedPhoto = _a.resizedPhoto, updatedWidth = _a.updatedWidth, updatedHeight = _a.updatedHeight;
                                        if (!(updatedWidth && updatedHeight && resizedPhoto)) return [3 /*break*/, 5];
                                        return [4 /*yield*/, (0, offsets_js_1.getOffsets)(updatedWidth, updatedHeight, sizeType, layoutWidth, layoutHeight, photoOrderNumber, pagesAmount, step)];
                                    case 3:
                                        _b = _f.sent(), leftOffset = _b.leftOffset, topOffset = _b.topOffset;
                                        _d = (_c = dataToComposite).push;
                                        _e = {};
                                        return [4 /*yield*/, resizedPhoto.toBuffer()];
                                    case 4:
                                        _d.apply(_c, [(_e.input = _f.sent(), _e.left = leftOffset, _e.top = topOffset, _e)]);
                                        return [3 /*break*/, 6];
                                    case 5:
                                        console.log("updatedWidth or updatedHeight or resizedPhoto is not defined! updatedWidth value is ".concat(updatedWidth, ".  updatedHeight value is ").concat(updatedHeight, ". resizedPhoto value is ").concat(resizedPhoto, "."));
                                        _f.label = 6;
                                    case 6: return [3 /*break*/, 8];
                                    case 7:
                                        err_1 = _f.sent();
                                        console.error('Error processing photo:', err_1);
                                        return [3 /*break*/, 8];
                                    case 8: return [2 /*return*/];
                                }
                            });
                        }); }))];
                case 1:
                    _d.sent();
                    if (!decoration) return [3 /*break*/, 4];
                    path_2 = decoration.path, name = decoration.name, offsets = decoration.offsets;
                    decorationImage = (0, sharp_1.default)("".concat(path_2).concat(name));
                    if (!(pagesAmount && step)) return [3 /*break*/, 3];
                    _b = (_a = dataToComposite).push;
                    _c = {};
                    return [4 /*yield*/, decorationImage.toBuffer()];
                case 2:
                    _b.apply(_a, [(_c.input = _d.sent(), _c.left = offsets.left + calculateLeftOffsetBssedOnPagesAmount(pagesAmount, step), _c.top = offsets.top, _c)]);
                    return [3 /*break*/, 4];
                case 3:
                    console.log("pagesAmount or step is not defined! pagesAmount value is ".concat(pagesAmount, ". step value is ").concat(step, "."));
                    _d.label = 4;
                case 4: return [2 /*return*/, dataToComposite];
            }
        });
    });
}
var calculateLeftOffsetBssedOnPagesAmount = function (pagesAmount, step) {
    return (pagesAmount - 1) * step;
};
