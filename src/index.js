import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import * as firebase from 'firebase/app';

import App from './App';

const firebaseConfig = {
  apiKey: 'AIzaSyAHoOruLMUMlAvI4-s3DdD0SyOPhsuuBFM',
  authDomain: 'payme-e1e50.firebaseapp.com',
  databaseURL: 'https://payme-e1e50.firebaseio.com',
  projectId: 'payme-e1e50',
  storageBucket: 'payme-e1e50.appspot.com',
  messagingSenderId: '813994851118',
  appId: '1:813994851118:web:c5288cd7d1b9bf875f18bf',
};
firebase.initializeApp(firebaseConfig);

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
