'use strict';

module.exports = function(gulp, config) {
    var OPTIONS = config;

    var jasmine = require('gulp-jasmine');

    ////////////////////////////////////////////////////////////////////
    // JASMINE
    ////////////////////////////////////////////////////////////////////
    gulp.task('jasmine', function() {
        return gulp.src(OPTIONS.DIR.TEST)
            .pipe(jasmine());
    });


    ////////////////////////////////////////////////////////////////////
    // TASKS
    ////////////////////////////////////////////////////////////////////
    gulp.task('test:jasmine', ['jasmine']);

    gulp.task('watch:test', function() {
        gulp.watch(OPTIONS.GLOB.JS, ['build:scripts', 'test:jasmine']);
        gulp.watch(OPTIONS.DIR.TEST, ['test:jasmine']);
    })
};