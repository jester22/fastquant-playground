export enum ChartTypes {
  DISCLOSURE = 'DISCLOSURE',
  NETWORK = 'NETWORK',
}

export interface GridItemProps {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  type: ChartTypes;
}

export interface GridStateProps {
  cols: number;
  breakpoint: string;
}
