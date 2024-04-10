export enum ALBUM_NAMES {
  ourKingergarten = 'Наш детский сад'
}

export enum SIZE_TYPES {
  COVER = 'COVER', 
  FULL = 'FULL', 
  HALF = 'HALF',
  THREE_QUARTERS = 'THREE_QUARTERS',
  HALF_CUTTED = 'HALF_CUTTED',
  THREE_HORISONTAL_HALF = 'THREE_HORISONTAL_HALF',
  FOUR_HORISONTAL_FULL = 'FOUR_HORISONTAL_FULL',
  TWO_VERTICAL_ONE_HORISONTAL_HALF = 'TWO_VERTICAL_ONE_HORISONTAL_HALF',
  TWO_HORISONTAL_HALF = 'TWO_HORISONTAL_HALF',
  FOUR_VERTICAL_HALF = 'FOUR_VERTICAL_HALF',
  TWO_VERTICAL_CUSTOM = 'TWO_VERTICAL_CUSTOM',
  VIGNETTE = 'VIGNETTE', 
}

export enum SIZE_CODES {
  FULL = 'FULL', 
  COVER = 'COVER', 
  F1C1 = 'F1C1',
  F1H3 = 'F1H3',
  H4 = 'H4',
  F1V2H1 = 'F1V2H1',
  F1H2 = 'F1H2',
  F1V4 = 'F1V4',
  XXLF1V2 = 'XXLF1V2',
  VIGNETTE = 'VIGNETTE',
}


export enum LAYOUT_TYPE {
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

export type LayoutTypeMapping = Record<SIZE_CODES, SIZE_TYPES[]>

export interface Direction {
  V: string;
  H: string;
}

export interface PaddingValue {
  xPadding: number;
  yPadding: number;
  innerPadding?: number;
}

export type Padding = Record<SIZE_TYPES, PaddingValue>

export interface Offsets {
  left: number;
  top: number;
}

export interface Decoration {
  name: string;
  path: string;
  offsets: Offsets
}

export interface LayoutDataValue {
  layoutPathFolder: string;
  step?: number;
  decoration?: Decoration
}

export type LayoutData = Record<LAYOUT_TYPE, LayoutDataValue>

export interface AlbumDataValue {
  name: string;
  layoutsData: LayoutData
}

export type AlbumData = Record<ALBUM_NAMES, AlbumDataValue>

export interface Photo {
  path: string;
  sizeType: SIZE_TYPES
}

export interface Page {
  layoutPath: string;
  pageName: string;
  pageType: LAYOUT_TYPE;
  photos: Photo[];
  pagesAmount?: number;
  step?: number;
  decoration?: Decoration;
}

export interface Student {
 name: string;
 pages: Page[]
}

export interface Data {
  albumName: string;
  studentsData: Student[]
}

