'use strict';

module.exports = function(gulp, config) {
    var OPTIONS = config;

    var sourcemaps = require('gulp-sourcemaps');

    ////////////////////////////////////////////////////////////////////
    // SASS
    ////////////////////////////////////////////////////////////////////
    gulp.task('sass', function() {
        var sass = require('gulp-sass');
        var autoprefixer = require('gulp-autoprefixer');

        gulp.src(OPTIONS.GLOB.SASS)
            .pipe(sourcemaps.init())
            .pipe(
                sass()
                .on('error', sass.logError))
            .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest(OPTIONS.DIR.DEST_STYLES));
    });


    ////////////////////////////////////////////////////////////////////
    // TASKS
    ////////////////////////////////////////////////////////////////////
    gulp.task('build:sass', ['sass']);

    gulp.task('watch:sass', function() {
        gulp.watch(OPTIONS.GLOB.SASS, ['sass']);
    });
};