Resume
=============
[![Travis branch][travis-ci-img]][travis-ci-url] [![Dependency Status][david-dm-image]][david-dm-url]

## Structure

- client
  + scripts
  + styles
- src
  + actions
  + components
  + constants
  + dispatcher
  + pages
  + stores

## Development
[![devDependency Status][david-dm-dev-image]][david-dm-dev-url]

`npm i`

`npm start`

and then open `http://localhost:3000/`

## Run Production Server

`npm i`

`npm run build`: To build the production into `_public` folder

and then run http server on it. `http-server _public`

open `http://localhost:8080/` to see production result

> Production use the uglifyJS and minimize css to enhance loading js and css file.

## Run Test and Lint

- `npm i`
- `npm test`

## Clean Environment

- `npm run clean` only clean build result.
- `npm run clean-all` clean all dependencies and modules.


## License

The MIT License (MIT)

Copyright (c) 2016 Lee  < jessy1092@gmail.com >

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[travis-ci-img]: https://img.shields.io/travis/jessy1092/resume/master.svg?style=flat-square
[travis-ci-url]: https://travis-ci.org/jessy1092/resume

[david-dm-image]: https://img.shields.io/david/jessy1092/resume.svg?style=flat-square
[david-dm-url]: https://david-dm.org/jessy1092/resume
[david-dm-dev-image]: https://img.shields.io/david/dev/jessy1092/resume.svg?style=flat-square
[david-dm-dev-url]: https://david-dm.org/jessy1092/resume#info=devDependencies
