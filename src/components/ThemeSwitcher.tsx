import IconButton from '@material-ui/core/IconButton';
import DarkIcon from '@material-ui/icons/Brightness4';
import LightIcon from '@material-ui/icons/Brightness5';
import React from 'react';
import { useRecoilState } from 'recoil';

import { themeState } from '../atoms';
import { ThemeTypes } from '../types';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useRecoilState(themeState);
  return (
    <>
      {theme === ThemeTypes.LIGHT ? (
        <IconButton color="inherit" aria-label="change to dark theme" onClick={() => setTheme(ThemeTypes.DARK)}>
          <LightIcon />
        </IconButton>
      ) : (
        <IconButton color="inherit" aria-label="change to light theme" onClick={() => setTheme(ThemeTypes.LIGHT)}>
          <DarkIcon />
        </IconButton>
      )}
    </>
  );
};

export default ThemeSwitcher;
