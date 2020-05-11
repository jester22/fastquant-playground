import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green
  }
});

function App () {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </ThemeProvider>
  );
}

export default App;
