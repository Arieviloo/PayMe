import React from 'react';
import ReactDOM from 'react-dom';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import App from './App';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#7159c1',
      light: '#9575FF',
      dark: '#4B3B80',
    },
    secondary: {
      main: '#f6f6f6',
      light: '#fff',
      dark: '#c2c2c2',
    },
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);
