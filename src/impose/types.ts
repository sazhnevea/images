export enum LAYOUT_TYPE {
  LAYOUTS = 'развороты',
  COVER = 'обложка',
  FULL = 'общая',
  F1C1 = 'слева 1 всклянь, 1 справа cutted',
  F1H3 = 'слева 1 всклянь, 3 справа горизонтали',
  H4 = '4 горизонтали',
  F1V2H1 = 'слева 1 всклянь, справа 2 вертикали и 1 горизонталь', 
  F1H2 = 'слева 1 всклянь, справа 2 горизонтали', 
  F1V4 = '1 слева всклянь, справа 4 вертикали',
  XXLF1V2 = 'слева 1 большой, справа 2 вертикали',
  VIGNETTE = 'виньетка',
}

export enum SIZE_TYPE {
  COVER ='COVER', 
  FULL ='FULL', 
  HALF ='HALF',
  THREE_QUARTERS ='THREE_QUARTERS',
  HALF_CUTTED ='HALF_CUTTED',
  THREE_HORISONTAL_HALF ='THREE_HORISONTAL_HALF',
  FOUR_HORISONTAL_FULL ='FOUR_HORISONTAL_FULL',
  TWO_VERTICAL_ONE_HORISONTAL_HALF = 'TWO_VERTICAL_ONE_HORISONTAL_HALF',
  TWO_HORISONTAL_HALF ='TWO_HORISONTAL_HALF',
  FOUR_VERTICAL_HALF ='FOUR_VERTICAL_HALF',
  TWO_VERTICAL_CUSTOM ='TWO_VERTICAL_CUSTOM',
}

export interface Photo {
  path: string;
  sizeType: SIZE_TYPE
}

export interface Decoration {
  path: string;
  name: string;
  pagesAmount: number;
  step: number;
  offsets: Offsets;
}

export interface Offsets {
  left: number;
  top: number;
}

export interface Page {
  layoutPath: string;
  pageOutputFilename: number;
  pageType: LAYOUT_TYPE;
  photos: Photo[];
  pagesAmount: number;
  step: number;
  decorations?: Decoration[];
}

export interface Student {
  name: string;
  pages: Page[]
}

export enum ALBUM_NAME {
  OUR_KINDERGARTEN ='Наш детский сад'
}

export enum DIRECTION {
  V = 'verical',
  H = 'horisontal',
}

export type PaddingsData = Record<SIZE_TYPE, { xPadding: number, yPadding: number, innerPadding?: number }>

export enum CVSColumnName {
  studentName = 'Имя участника',
  albumName = 'Название альбома'
}

export type ExpectedCSVProperties = CVSColumnName | LAYOUT_TYPE;

export type CSVColumn = Record<ExpectedCSVProperties, string>
