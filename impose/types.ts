export interface Size {
  width: string
  height: string
}

export interface Coordinate {
  x: string
  y: string
}

export interface Photo {
  path: string
  coordinate: Coordinate
  size: Size
}

export interface Page {
    path: string
    photos: Photo[]
}

export interface Student {
    name: string
    pages: Page[] 
}