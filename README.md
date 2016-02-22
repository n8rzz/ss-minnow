# generator-ss-minnow [![NPM version][npm-image]][npm-url] [![Dependency Status][daviddm-image]][daviddm-url]
> A simple project starter

## What is a Yeoman?

Feel free to [learn more about him](http://yeoman.io/).


## Pre-Installation
In order to run this generator you will first need to clone this repo locally.
```bash
git clone https://github.com/n8rzz/ss-minnow.git
```

Navigate to `ss-minnow/generator-ss-minnow`, then run the `npm link` command.  This will create a link to your global npm modules folder and allow you to use the
`yo ss-minnow` command inside any folder.


## Installation
First, install [Yeoman](http://yeoman.io) and ~~generator-ss-minnow using [npm](https://www.npmjs.com/)~~ (we assume you have pre-installed [node.js](https://nodejs.org/)).


```bash
npm install -g yo
```

Create a new project folder, `cd` into it and then generate your new project:

```bash
yo ss-minnow
```

## Available Tasks
#### NPM Tasks:
```
    npm run test (alias: gulp test)
    npm run coverage (alias: gulp coverage)
```

#### Gulp Tasks:
```
    gulp build
    gulp watch
    gulp docs - generate api and coverage reports
    gulp test - run entire test suite
    gulp tdd - run tests onChange showing only failing test(s)
    gulp coverage - generate coverage reports
```

## Directory Layout

```
.
├── generators/
│   └── app/
│       └── templates/
│           ├── spec/
│               ├── util/
│                   └── assert.spec.js
│               └── app.spec.js
│           ├── src/
│               └── assets/
│                   ├── scripts/
│                       └── util/
│                           └── assert.js
│                       ├── app.js
│                       └── main.js
│                   └── scss/
│                       ├── base/
│                           ├── _elements.scss
│                           └── _reset.scss
│                       ├── helpers/
│                           ├── _fonts.scss
│                           ├── _util.scss
│                           └── _vars.scss
│                       ├── landmarks/
│                           └── _page.scss
│                       └── modules/
│                           ├── alert/
│                               └── _alert.scss
│                           ├── blocks/
│                               └── _blocks.scss
│                           ├── btn/
│                               ├── _btn.scss
│                               └── _btnAsLink.scss
│                           ├── grid/
│                               ├── _grid.scss
│                               ├── _grid_lg.scss
│                               ├── _grid_md.scss
│                               ├── _grid_sm.scss
│                               └── _helpers.scss
│                           ├── hdg/
│                               └── _hdg.scss
│                           ├── hlist/
│                               └── _hlist.scss
│                           ├── input/
│                               └── _input.scss
│                               └── _input_sm.scss
│                           ├── link/
│                               └── _link.scss
│                           ├── media/
│                               └── _media.scss
│                           ├── txt/
│                               └── _txt.scss
│                           ├── vlist/
│                               └── _vlist.scss
│                           ├── vr/
│                               └── _vr.scss
│                           └── wrapper/
│                               └── _wrapper.scss
│                               └── _wrapper_sm.scss
│                       ├── _screen_md.scss
│                       ├── _screen_sm.scss
│                       ├── legacy.css
│                       └── modern.css
│               └── index.html
│           ├── tools/
│           ├── _bower.json
│           ├── bowerrc
│           ├── editorconfig
│           ├── eslintignore
│           ├── eslintrc
│           ├── gitignore
│           ├── Gulpfile.js
│           ├── karma-coverage.conf.js
│           ├── karma-tdd.conf.js
│           └── karma.conf.js
│           └── _package.json
│       └── index.js
├── .editorconfig
├── .eslinignore
├── .eslintrc
├── .gitignore
├── .travis.yml
├── .yo-rc.json
├── package.json
├── gulpfile.js
└── test/
    └── app.js
```

## Support
I you have questions or spot a bug, please feel free to [log an issue](https://github.com/n8rzz/ss-minnow/issues).

## License

MIT © [Nate geslin](https://github.com/n8rzz)


[npm-image]: https://badge.fury.io/js/generator-ss-minnow.svg
[npm-url]: https://npmjs.org/package/generator-ss-minnow
[daviddm-image]: https://david-dm.org/n8rzz/ss-minnow.svg
[daviddm-url]: https://david-dm.org/n8rzz/ss-minnow
