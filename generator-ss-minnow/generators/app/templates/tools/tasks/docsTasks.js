'use strict';

module.exports = function(gulp, config) {
    var OPTIONS = config;

    var connect = require('gulp-connect');

    ////////////////////////////////////////////////////////////////////
    // SERVE COVERAGE REPORTS
    ////////////////////////////////////////////////////////////////////
    gulp.task('connect:coverage', function() {
        connect.server({
            root: OPTIONS.DIR.DOCS_COVERAGE,
            port: 3003,
            livereload: true
        });
    });

    ////////////////////////////////////////////////////////////////////
    // TASKS
    ////////////////////////////////////////////////////////////////////
    gulp.task('coverage', ['connect:coverage']);
}