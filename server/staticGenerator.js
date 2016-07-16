import React          from 'react';
import ReactDOMServer from 'react-dom/server';
import fs             from 'fs';
import IndexPage      from '../src/pages/IndexPage';
import devTemplate    from './dev/html.template';
import prodTemplate   from './prod/html.template';

let genTemplate = devTemplate;

if (process.env.NODE_ENV === 'production') {
  genTemplate = prodTemplate;
}

let html = ReactDOMServer.renderToString(<IndexPage/>);
let template = genTemplate({
  title: 'Lee 的履歷',
  ogTitle: 'Lee 的履歷',
  description: 'Lee 的履歷',
  image: '',
  url: '',
  keywords: '台灣',
  html: html
});

fs.writeFile('./_public/index.html', template, 'utf8', (error) => {
  if (error) {
    throw error;
  }
  console.log('index.html done');
});

fs.writeFile('./_public/404.html', template, 'utf8', (error) => {
  if (error) {
    throw error;
  }
  console.log('404.html done');
});
