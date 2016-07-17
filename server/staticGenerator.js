
import fs            from 'fs';
import htmlGenerator from './htmlGenerator';

htmlGenerator((template) => {

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
});
