import { CUT_OFF } from "../constants.js";

Number.prototype.getHalf = function() {
  //@ts-ignore
  return this / 2;
};

Number.prototype.plusMargin = function() {
  //@ts-ignore
  return this + CUT_OFF;
};

Number.prototype.minusMargin = function() {
  //@ts-ignore
  return this - CUT_OFF;
};

Number.prototype.minusMargins = function() {
  //@ts-ignore
  return this - CUT_OFF * 2;
};