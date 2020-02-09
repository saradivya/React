import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const React = require('react');
const ReactDOM = require('react-dom');
import Routes from './client/routes/index.js';
import { Provider } from  'react-redux';
import configureStore  from  './store';
import { MuiThemeProvider } from '@material-ui/core';

let theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: ['Lato'].join(','),
    font: {
      color: '#333940',
    },
  },
  root: {
    color: '#333940',
  },
  palette: {
    tertiary: { main: '#004261' },
    primary: { main: '#0097C7' },
    secondary: { main: '#00B4D2' },
    background: { default: '#fcfcfc' },
    error: { main: '#E10C32' },
    success: { main: '#00AB84' },
  },
  overrides: {
    MuiSvgIcon: {
      root: {
        // fill: '#00B4D2',
      },
    },
    MuiButton: {
      contained: {
        backgroundColor: '#0097C7',
        '&:hover': {
          backgroundColor: '#0086A8',
        },
      },
    },
    MuiPaper: {
      root: {
        backgroundColor: '#ffffff',
        color: '#333940',
      },
    },
    App: {
      content: {
        padding: '0px',
      },
    },
  },
});


const store  = configureStore();


ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme = {theme}>
      <Routes/>
    </MuiThemeProvider>
  </Provider>, document.getElementById('app'),
);
