import IconButton from '@material-ui/core/IconButton';
import DarkIcon from '@material-ui/icons/Brightness4';
import LightIcon from '@material-ui/icons/Brightness5';
import React from 'react';
import { useRecoilState } from 'recoil';

import { themeState } from '../atoms';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useRecoilState(themeState);
  return (
    <>
      {theme === 'light' ? (
        <IconButton
          color="inherit"
          aria-label="change to dark theme"
          onClick={() => setTheme('dark')}
        >
          <LightIcon />
        </IconButton>
      ) : (
        <IconButton
          color="inherit"
          aria-label="change to light theme"
          onClick={() => setTheme('light')}
        >
          <DarkIcon />
        </IconButton>
      )}
    </>
  );
};

export default ThemeSwitcher;
