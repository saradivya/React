const React = require('react');
const ReactDOM = require('react-dom');
import Routes from './client/routes/index.js';
import { Provider } from  'react-redux';
import configureStore  from  './store';
require('./public/index.css');



const store  = configureStore();


ReactDOM.render(
  <Provider store={store}>
    <Routes/>
  </Provider>, document.getElementById('app'),
);
