'use strict';

module.exports = function(gulp, config) {
    var OPTIONS = config;

    var browserify = require('browserify');
    var babelify = require('babelify');
    var source = require('vinyl-source-stream');

    ////////////////////////////////////////////////////////////////////
    // SASS
    ////////////////////////////////////////////////////////////////////
    gulp.task('babel', function () {
        browserify({
            entries: OPTIONS.FILE.JS_SRC_CLIENT,
            extensions: ['.js, .jsx'],
            debug: true
        })
            .transform(babelify)
            .bundle()
            .pipe(source('bundle.js'))
            .pipe(gulp.dest(OPTIONS.DIR.DEST_SCRIPTS));
    });

    ////////////////////////////////////////////////////////////////////
    // TASKS
    ////////////////////////////////////////////////////////////////////
    gulp.task('build:scripts', ['babel']);

    gulp.task('watch:scripts', function() {
        gulp.watch(OPTIONS.GLOB.JS, ['babel']);
    });
};