import { atom } from 'recoil';

export const themeState = atom({
  key: 'themeState',
  default: 'light',
});

export const gridState = atom({
  key: 'gridState',
  default: [],
});
