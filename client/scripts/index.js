import React          from 'react';
import ReactDOM       from 'react-dom';
import App            from '../../src';
import configureStore from '../../src/store';


ReactDOM.render(
  <App store={configureStore(window.__state__)}/>,
  document.getElementById('content')
);
