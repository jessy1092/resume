import express from 'express';
import path    from 'path';

import webpack       from 'webpack';
import webpackDev    from 'webpack-dev-middleware';
import webpackHot    from 'webpack-hot-middleware';
import webpackConfig from './dev/webpack.config';

let compiler = webpack(webpackConfig);
let app = express();

let BUILD_PATH = '_public';

app.use(webpackDev(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}));

app.use(webpackHot(compiler));

app.use(express.static(path.resolve(BUILD_PATH)));

app.all('*', (req, res) => {
  console.log('URL:' + req.url);

  res.sendFile(path.resolve(`${BUILD_PATH}/index.html`));
});

app.listen(3000, () => {
  console.log('Server start on port 3000');
});
