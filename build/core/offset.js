"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_js_1 = require("../constants.js");
Number.prototype.getHalf = function () {
    return this / 2;
};
Number.prototype.plusMargin = function () {
    return this + constants_js_1.CUT_OFF;
};
Number.prototype.minusMargin = function () {
    return this - constants_js_1.CUT_OFF;
};
Number.prototype.minusMargins = function () {
    return this - constants_js_1.CUT_OFF * 2;
};
