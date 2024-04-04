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
var fs_1 = __importDefault(require("fs"));
var types_js_1 = require("./types.js");
var layoutTypeValues = Object.values(types_js_1.LAYOUT_TYPE);
function processCSVDataToImpose(csvPath) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    var studentsData = [];
                    var currentStudent = { name: '', pages: [] };
                    var pageNumber = 1;
                    var readStream = fs_1.default.createReadStream(csvPath);
                    readStream.pipe((0, csv_parser_1.default)())
                        .on('data', function (studentData) {
                        var studentName = studentData[types_js_1.CVSColumnName.studentName];
                        if (studentName) {
                            currentStudent = {
                                name: studentName,
                                pages: [],
                            };
                            var validLayoutFields = layoutTypeValues.filter(function (layoutType) { return studentData.hasOwnProperty(layoutType) && studentData[layoutType].length; });
                            var pageData = {};
                            for (var i = 0; i <= validLayoutFields.length - 1; i++) {
                                pageData.pageType = validLayoutFields[i];
                                var photoSets = getPhotoSets(studentData[validLayoutFields[i]]);
                                var photos = [];
                                photoSets.forEach(function (photoSet) {
                                    photoSet.forEach(function (photoNumber) {
                                        console.log('photoNumber', photoNumber);
                                    });
                                });
                                // const pageData: Page = {
                                // сформировать объект
                                // pageType: validLayoutFields[i]
                                // }
                            }
                            for (var property in studentData) {
                                // if (property in LAYOUT_TYPE) {
                                //   console.log('in')
                                //   console.log('property', property)
                                //   console.log(123, studentData[property])
                                // }
                                // if (studentData[property]) {
                                // console.log('studentData[property]', studentData[property])
                                // const layoutTypesOrder: SIZE_TYPE[] = LAYOUT_TYPE_MAPPING[getKeyByValue(LAYOUT_TYPE, fixedColumnName)];
                                // const numberStrings = getNumberStrings(studentData[property]);
                                // if (numberStrings) {
                                //   const photoNumbers = parseNumberArray(numberStrings);
                                //   const photos = processPhotoNumbers(photoNumbers, layoutTypesOrder, studentData['Имя участника'], property);
                                //   currentStudent.pages.push({
                                //     layoutPath: LAYOUT_PATH,
                                //     pageOutputFilename: `${pageNumber}`,
                                //     pageType: fixedColumnName,
                                //     photos: photos,
                                //   });
                                //   pageNumber++;
                                // } else {
                                //   console.error(`У студента ${studentData['Имя участника']} отсутствуют номера фотографий в развороте ${property}`);
                                // }
                                // }
                            }
                            studentsData.push(currentStudent);
                            // currentStudent = {};
                            pageNumber = 1;
                        }
                    })
                        .on('end', function () {
                        // if (Object.keys(ALBUM_NAMES_DATA).includes(data.albumName)) {
                        //   const albumData = ALBUM_NAMES_DATA[data.albumName]
                        //   data.studentsData.forEach((studentData) => {
                        //     studentData.pages.forEach(pageData => {
                        //       const { pageType } = pageData
                        //       const layoutData = albumData.layoutsData[pageType]
                        //       if (layoutData) {
                        //         const pagesAmount = studentData.pages.length;
                        //         pageData.pagesAmount = pagesAmount
                        //         pageData.step = layoutData.step
                        //         pageData.layoutPath = `${layoutData.layoutPathFolder}${Math.max(2, studentData.pages.length)}.jpg`
                        //         pageData.decorations = layoutData.decorations
                        //       }
                        //     })
                        //   })
                        // }
                        resolve(studentsData);
                    })
                        .on('error', function (error) {
                        reject(error);
                    });
                })];
        });
    });
}
exports.processCSVDataToImpose = processCSVDataToImpose;
// const processPhotoNumbers = (photoNumbers: number[], layoutTypesOrder: SIZE_TYPE[], studentName: string, property) => {
//   return photoNumbers.map((number, index) => {
//     if (layoutTypesOrder[index]) {
//       return ({
//         path: getImageName(number),
//         sizeType: layoutTypesOrder[index]
//       })
//     }
//     console.error(`Фотография № ${number} является лишней в развороте ${property} у студента ${studentName}`)
//   }).filter(Boolean)
// }
var getPhotoSets = function (string) {
    var result = [];
    console.log('string', string);
    var stringSets = string.split(';');
    stringSets.forEach(function (photoString) {
        var photoArray = [];
        var photos = photoString.split(',');
        photos.forEach(function (photo) { return photoArray.push(photo); });
        result.push(photoArray);
    });
    return result;
};
