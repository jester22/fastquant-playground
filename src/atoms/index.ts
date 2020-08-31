import { atom } from 'recoil';

import { GridItemProps, ThemeTypes } from '../types';

export const themeState = atom<ThemeTypes>({
  key: 'themeState',
  default: ThemeTypes.LIGHT,
});

export const gridListState = atom<GridItemProps[]>({
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

export const selectedWidgetItemIDState = atom({
  key: 'selectedWidgetItemState',
  default: '',
});
