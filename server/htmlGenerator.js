
import fs             from 'fs';
import React          from 'react';
import ReactDOMServer from 'react-dom/server';
import App            from '../src';
import configureStore from '../src/store';
import {resiveResume}  from '../src/actions';

import devTemplate    from './dev/html.template';
import prodTemplate   from './prod/html.template';

let genTemplate = devTemplate;

if (process.env.NODE_ENV === 'production') {
  genTemplate = prodTemplate;
}

function serverRender(store) {

  let html = ReactDOMServer.renderToString(<App store={store}/>);
  let template = genTemplate({
    title: 'Lee 的履歷',
    ogTitle: 'Lee 的履歷',
    description: 'Lee 的履歷',
    image: '',
    url: '',
    keywords: '台灣',
    html: html
  });

  return template;
}

function htmlGenerator(callback) {

  let store = configureStore();

  // Fetch resume data, then generate index page
  return store.dispatch(() => new Promise((resolve, reject) =>
    fs.readFile('./client/data/resume.json', 'utf8', (error, data) => {
      if (error) {
        reject(error);
      }
      resolve(data);
    }))
  ).then(
    data => JSON.parse(data)
  ).then(
    json => {
      store.dispatch(resiveResume(json));
      return serverRender(store);
    }
  );
}

export default htmlGenerator;
