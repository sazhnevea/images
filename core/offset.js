import { CUT_OFF } from "../constants.js";

Number.prototype.getHalf = function() {
  return this / 2;
};

Number.prototype.plusCutOff = function() {
  return this + CUT_OFF;
};

Number.prototype.minusCutOff = function() {
  return this - CUT_OFF;
};

Number.prototype.minusCutOffs = function() {
  return this - CUT_OFF * 2;
};