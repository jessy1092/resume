import gulp    from 'gulp';
import gutil   from 'gulp-util';
import shell   from 'gulp-shell';
import nodemon from 'gulp-nodemon';
import del     from 'del';

import webpack           from 'webpack';
import webpackProdConfig from './server/prod/webpack.config';
import webpackDevConfig  from './server/dev/webpack.config';

let BUILD_PATH = './_public';
let production = false;

if (gutil.env.env === 'production') {
  production = true;
}

gulp.task('static-generator', shell.task(
  'babel-node server/staticGenerator.js', {
    env: {
      NODE_ENV: production ? 'production': 'development'
    }
  }
));

gulp.task('ico', () => {
  return gulp.src('./client/views/*.ico')
    .pipe(gulp.dest(BUILD_PATH));
});

gulp.task('data', () => {
  return gulp.src('./client/data/*')
    .pipe(gulp.dest(`${BUILD_PATH}/data/`));
});

gulp.task('CNAME', () => {
  return gulp.src('./CNAME')
    .pipe(gulp.dest(BUILD_PATH));
});

gulp.task('webpack', (cb) => {

  let webpackConfig = production ? webpackProdConfig: webpackDevConfig;

  webpack(webpackConfig, (err, stats) => {
    if (err) {
      return cb(err);
    }
    let jsonStats = stats.toJson();

    if (jsonStats.errors.length > 0) {
      return cb(jsonStats.errors);
    }

    if (jsonStats.warnings.length > 0) {
      gutil.log(gutil.colors.yellow(jsonStats.warnings));
    }
    cb();
  });
});

gulp.task('webpack:watch-server', (cb) => {

  let started = false;

  let serverIgnoreJS = [
    'node_modules/*',
    'client/*',
    'server/staticGenerator.js',
    'src/*',
    '_public/*',
    'gulpfile.babel.js',
    'karma.config.js'
  ];

  nodemon({
    script: 'server/server.js',
    ext: 'js',
    exec: 'babel-node',
    env: {
      NODE_ENV: 'development'
    },
    ignore: serverIgnoreJS
  }).on('start', function() {
    if (!started) {
      cb();
      started = true;
    }
  });
});

gulp.task('clean-build', () => {
  return del(BUILD_PATH);
});

gulp.task('clean-all', ['clean-build'], () => {
  return del([
    'coverage',
    'node_modules'
  ]);
});

gulp.task('build:static', ['data', 'CNAME', 'static-generator']);
gulp.task('build', ['build:static', 'webpack']);
gulp.task('dev', ['build:static', 'webpack:watch-server']);
gulp.task('default', ['build']);
