export {};

declare global {
  namespace NodeJS {
      interface Global {
          CUT_OFF: number;
      }
  }

  interface Number {
      getHalf(): number;
      plusMargin(): number;
      minusMargin(): number;
      minusMargins(): number;
  }
}