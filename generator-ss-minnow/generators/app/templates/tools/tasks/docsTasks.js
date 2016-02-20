'use strict';

module.exports = function(gulp, config) {
    var OPTIONS = config;

    var connect = require('gulp-connect');
    var yuidoc = require('gulp-yuidoc');

    ////////////////////////////////////////////////////////////////////
    // SERVE COVERAGE REPORTS
    ////////////////////////////////////////////////////////////////////
    gulp.task('connect:coverage', function() {
        connect.server({
            root: OPTIONS.DIR.DOCS_COVERAGE,
            port: 3003
        });
    });

    ////////////////////////////////////////////////////////////////////
    // YUIDOC
    ////////////////////////////////////////////////////////////////////
    gulp.task('docs:yui', function() {
        gulp.src(OPTIONS.GLOB.JS)
            .pipe(yuidoc.parser())
            .pipe(yuidoc.generator())
            .pipe(gulp.dest(OPTIONS.DIR.DOCS_API))
    });
}