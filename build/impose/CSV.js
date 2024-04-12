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
                    var data = { albumName: '', studentsData: [] };
                    var currentStudent = {};
                    var pageNumber = 1;
                    var readStream = (0, fs_1.createReadStream)(csvPath);
                    readStream.pipe((0, csv_parser_1.default)())
                        .on('data', function (studentData) {
                        var albumName = (0, common_1.getAlbumName)(studentData);
                        if (!data.albumName) {
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
                                            layoutPath: constants_js_1.LAYOUT_PATH,
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
                            data.studentsData.push(currentStudent);
                            pageNumber = 1;
                        }
                    })
                        .on('end', function () {
                        if (Object.keys(constants_js_1.ALBUM_DATA).includes(data.albumName)) {
                            var albumData_1 = constants_js_1.ALBUM_DATA[data.albumName];
                            data.studentsData.forEach(function (studentData) {
                                studentData.pages.forEach(function (pageData) {
                                    var pageType = pageData.pageType;
                                    var layoutData = albumData_1.layouts[pageType];
                                    if (layoutData) {
                                        var step = layoutData.step, layoutPathFolder = layoutData.layoutPathFolder, decoration = layoutData.decoration;
                                        var pagesAmount = studentData.pages.length;
                                        pageData.pagesAmount = pagesAmount;
                                        pageData.step = step || 0;
                                        pageData.layoutPath = "".concat(layoutPathFolder).concat(step ? Math.max(2, studentData.pages.length - 1) : 1, ".jpg");
                                        pageData.decoration = decoration;
                                    }
                                });
                            });
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
            path: "".concat(number, ".jpg"),
            sizeType: layoutTypesOrder[index]
        });
    });
};
var getLayoutTypeKey = function (value) {
    for (var key in types_1.LAYOUT_TYPE) {
        if (types_1.LAYOUT_TYPE[key] === value) {
            return key;
        }
    }
    return undefined;
};
