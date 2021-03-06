'use strict';

module.exports = function(gulp, config) {
    var OPTIONS = config;

    ////////////////////////////////////////////////////////////////////
    // COPY HTML
    ////////////////////////////////////////////////////////////////////
    gulp.task('copyHtml', function() {
      // copy any html files to web/
      gulp.src(OPTIONS.GLOB.MARKUP)
          .pipe(gulp.dest(OPTIONS.DIR.DEST_FOLDER));
    });

    ////////////////////////////////////////////////////////////////////
    // TASKS
    ////////////////////////////////////////////////////////////////////
    gulp.task('copy:markup', ['copyHtml']);

    gulp.task('watch:markup', function() {
        gulp.watch(OPTIONS.GLOB.MARKUP, ['copyHtml']);
    });
};
