import './assets/css/react-grid-layout.css';
import './assets/css/react-resizable.css';

import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import React, { ReactNode } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { RecoilRoot, useRecoilValue } from 'recoil';

import { themeState } from './atoms';
import NavLayout from './layouts/NavLayout';

interface Props {
  children: ReactNode;
}

const ThemeRecoilProvider = ({ children }: Props) => {
  const theme = createMuiTheme({
    palette: {
      type: useRecoilValue(themeState),
    },
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

function App() {
  return (
    <RecoilRoot>
      <ThemeRecoilProvider>
        <CssBaseline />
        <DndProvider backend={HTML5Backend}>
          <NavLayout />
        </DndProvider>
      </ThemeRecoilProvider>
    </RecoilRoot>
  );
}

export default App;
