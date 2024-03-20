import { CUT_OFF } from "../constants.js";

Number.prototype.getHalf = function() {
  return this / 2;
};


Number.prototype.plusMargin = function() {
  return this + CUT_OFF;
};

Number.prototype.minusMargin = function() {
  return this - CUT_OFF;
};

Number.prototype.minusMargins = function() {
  return this - CUT_OFF * 2;
};