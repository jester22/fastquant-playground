import { atom } from 'recoil';

export const themeState = atom({
  key: 'themeState',
  default: 'light',
});

export const gridListState = atom({
  key: 'gridListState',
  default: [],
});

export const gridState = atom({
  key: 'gridState',
  default: { cols: 12, breakpoint: '' },
});
