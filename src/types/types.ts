export interface GridItem {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface GridStateProps {
  cols: number;
  breakpoint: string;
}
