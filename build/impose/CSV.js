"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.processCSVDataToImpose = void 0;
var csv_parser_1 = __importDefault(require("csv-parser"));
var fs_1 = require("fs");
var common_1 = require("../common/common");
var constants_js_1 = require("../constants.js");
var types_1 = require("./types");
var layoutTypeValues = Object.values(types_1.LAYOUT_TYPE);
function processCSVDataToImpose(csvPath) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    var data = {};
                    var dataRaw = { albumName: '', studentsData: [] };
                    var currentStudent = {};
                    var pageNumber = 1;
                    var readStream = (0, fs_1.createReadStream)(csvPath);
                    readStream.pipe((0, csv_parser_1.default)())
                        .on('data', function (studentData) {
                        var albumName = (0, common_1.getAlbumName)(studentData);
                        if (albumName.length && !dataRaw.albumName) {
                            data.albumName = albumName;
                        }
                        var studentName = studentData['Имя участника'];
                        if (studentName) {
                            currentStudent = {
                                name: studentName,
                                pages: [],
                            };
                            var _loop_1 = function (property) {
                                var fixedColumnName = layoutTypeValues.find(function (layoutType) { return property.includes(layoutType); });
                                if (fixedColumnName && studentData[property]) {
                                    var sizesMappingList = constants_js_1.LAYOUT_TYPE_SIZES_MAPPING[fixedColumnName];
                                    var photoNumbers = (0, common_1.getNumberStrings)(studentData[property]);
                                    if (photoNumbers) {
                                        var photos = processPhotoNumbers(photoNumbers, sizesMappingList);
                                        currentStudent.pages.push({
                                            isCover: types_1.LAYOUT_TYPE.COVER === fixedColumnName,
                                            pageName: "".concat(pageNumber),
                                            pageType: fixedColumnName,
                                            photos: photos,
                                        });
                                        pageNumber++;
                                    }
                                    else {
                                        console.error("\u0423 \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u0430 ".concat(studentName, " \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044E\u0442 \u043D\u043E\u043C\u0435\u0440\u0430 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0439 \u0432 \u0440\u0430\u0437\u0432\u043E\u0440\u043E\u0442\u0435 ").concat(property));
                                    }
                                }
                            };
                            for (var property in studentData) {
                                _loop_1(property);
                            }
                            dataRaw.studentsData.push(currentStudent);
                            pageNumber = 1;
                        }
                    })
                        .on('end', function () {
                        if (Object.keys(constants_js_1.ALBUM_DATA).includes(data.albumName)) {
                            var albumData_1 = constants_js_1.ALBUM_DATA[data.albumName];
                            var studentsData_1 = [];
                            dataRaw.studentsData.forEach(function (currentStudentData) {
                                var student = {};
                                student.name = currentStudentData.name;
                                var pagesAmount = currentStudentData.pages.length;
                                var pages = currentStudentData.pages.map(function (pageRawData) {
                                    var pageType = pageRawData.pageType;
                                    var layoutData = albumData_1.layouts[pageType];
                                    return populatePage(pageRawData, layoutData, pagesAmount);
                                });
                                student.pages = pages;
                                studentsData_1.push(student);
                            });
                            data.studentsData = studentsData_1;
                        }
                        else {
                            console.log("".concat(dataRaw.albumName, " is missing in ALBUM_DATA"));
                        }
                        resolve(data);
                    })
                        .on('error', function (error) {
                        reject(error);
                    });
                })];
        });
    });
}
exports.processCSVDataToImpose = processCSVDataToImpose;
var processPhotoNumbers = function (photoNumbers, layoutTypesOrder) {
    return photoNumbers.map(function (number, index) {
        return ({
            path: "".concat(constants_js_1.DATA_FOLDER_NAME, "/").concat(constants_js_1.RETOUCH_FOLDER_NAME, "/").concat(number, ".jpg"),
            sizeType: layoutTypesOrder[index]
        });
    });
};
var populatePage = function (pageDataRaw, layoutData, pagesAmount) {
    var photos = pageDataRaw.photos, isCover = pageDataRaw.isCover;
    var name = layoutData.name, step = layoutData.step, layoutPathFolder = layoutData.layoutPathFolder, decoration = layoutData.decoration, photosSizeAndOffsetsDataInOrder = layoutData.photosSizeAndOffsetsDataInOrder;
    return __assign(__assign({}, pageDataRaw), { layoutPath: getLayoutPath(layoutPathFolder, name, isCover, pagesAmount || 1), photos: populatePhotos(photos, photosSizeAndOffsetsDataInOrder, isCover, step, pagesAmount), step: step, decoration: decoration && processDecoration(decoration, isCover, pagesAmount, step) });
};
var processDecoration = function (decoration, isCover, pagesAmount, step) {
    if (!isCover) {
        return decoration;
    }
    return __assign(__assign({}, decoration), { path: "".concat(decoration.path, "/").concat(decoration.name), offsets: __assign(__assign({}, decoration.offsets), { left: withStep(decoration.offsets.left, pagesAmount, step) }) });
};
var populatePhotos = function (photo, photosSizeAndOffsetsDataInOrder, isCover, step, pagesAmount) {
    return photo.map(function (photo, index) { return (__assign(__assign({}, photo), { sizeAndOffset: __assign(__assign({}, photosSizeAndOffsetsDataInOrder[index]), { left: isCover ? withStep(photosSizeAndOffsetsDataInOrder[index].left, pagesAmount, step) : photosSizeAndOffsetsDataInOrder[index].left }) })); });
};
var withStep = function (value, step, pagesAmount) {
    return value + (0, common_1.calculateLeftOffsetBasedOnPagesAmount)(pagesAmount || 1, step || 0);
};
var getLayoutPath = function (layoutPathFolder, name, isCover, pagesAmount) {
    if (isCover) {
        return "".concat(layoutPathFolder, "/").concat(Math.max(2, pagesAmount - 1) > 6 ? 6 : pagesAmount - 1, ".jpg");
    }
    return "".concat(layoutPathFolder, "/").concat(name);
};
