export enum ALBUM_NAMES {
  ourKingergarten = 'Наш детский сад'
}

export enum LAYOUT_TYPE {
  COVER = 'обложка',
  FULL = 'общая',
  F1C1 = 'слева 1 всклянь, 1 справа cutted',
  F1H3 = 'слева 1 всклянь, 3 справа горизонтали',
  H4 = '4 горизонтали',
  F1V2H1 = 'слева 1 всклянь, справа 2 вертикали и 1 горизонталь', 
  F1V2 = '1 слева всклянь, справа 2 вертикали',
  F1H2 = 'слева 1 всклянь, справа 2 горизонтали', 
  F1V4 = '1 слева всклянь, справа 4 вертикали',
  XXLF1V2 = 'слева 1 большой, справа 2 вертикали',
  VIGNETTE = 'виньетка',
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
  TWO_VERTICAL_RIGHT_CENTER = 'TWO_VERTICAL_RIGHT_CENTER',
  VIGNETTE = 'VIGNETTE', 
}

export type LayoutTypeMapping = Record<LAYOUT_TYPE, SIZE_TYPES[]>

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

interface photosSize {
  width: number;
  height: number;
}

export interface LayoutData {
  layoutPathFolder: string;
  photosSizeDataOrder: photosSize[];
  step?: number;
  decoration?: Decoration
}

export type LayoutDataWithType = Record<LAYOUT_TYPE, LayoutData>

export interface AlbumDataValue {
  name: string;
  layouts: LayoutDataWithType;
}

interface ResizeData {
  width: number;
  height: number;
}

interface OffsetData {
  left: number;
  top: number;
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

