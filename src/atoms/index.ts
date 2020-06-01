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

export const itemState = (id: string) =>
  atom({
    key: id,
    default: {
      width: 0,
      height: 0,
    },
  });
