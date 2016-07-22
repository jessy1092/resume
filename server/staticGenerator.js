
import fs            from 'fs';
import htmlGenerator from './htmlGenerator';

function writeIndex(template) {
  return new Promise((resolve, reject) => {
    fs.writeFile('./_public/index.html', template, 'utf8', (error) => {
      if (error) {
        reject(error);
      } else {
        console.log('index.html done');
        resolve(template);
      }
    });
  });
}

function write404(template) {
  return new Promise((resolve, reject) => {
    fs.writeFile('./_public/404.html', template, 'utf8', (error) => {
      if (error) {
        reject(error);
      } else {
        resolve(template);
        console.log('404.html done');
      }
    });
  });
}

htmlGenerator()
  .then(template => writeIndex(template))
  .then(template => write404(template));
