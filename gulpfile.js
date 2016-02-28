'use strict';
var path = require('path');
var gulp = require('gulp');
var eslint = require('gulp-eslint');
var excludeGitignore = require('gulp-exclude-gitignore');
var mocha = require('gulp-mocha');
var istanbul = require('gulp-istanbul');
var plumber = require('gulp-plumber');

gulp.task('static', function () {
  return gulp.src('**/*.js')
    .pipe(excludeGitignore())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('pre-test', function () {
  return gulp.src([
      'generators/app/index.js',
      '!generators/**/*.spec.js',
      '!generators/templates/**/*',
    ])
    .pipe(excludeGitignore())
    .pipe(istanbul({
      ignore: [
        '**/node_modules/**',
        '**/templates/**'
      ],
      includeUntested: false
    }))
    .pipe(istanbul.hookRequire());
});

gulp.task('test', ['pre-test'], function (cb) {
  var mochaErr;

  gulp.src('generator-ss-minnow/test/**/*.js')
    .pipe(plumber())
    .pipe(mocha({reporter: 'dot'}))
    .on('error', function (err) {
      console.log('AN ERROR OCCURED IN MOCHA: ', err);
      mochaErr = err;
    })
    .pipe(istanbul.writeReports())
    .on('end', function () {
      cb(mochaErr);
    });
});

gulp.task('watch', function () {
  gulp.watch(['/**/*.js', 'test/**'], ['test']);
});

gulp.task('default', ['static', 'test']);
