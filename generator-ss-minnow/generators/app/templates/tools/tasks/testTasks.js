/**
 *
 *
 * DEPRECATED
 *
 *
 */
// /*eslint-disable */
// 'use strict';

// module.exports = function(gulp, config) {
//     var OPTIONS = config;

//     var jasmine = require('gulp-jasmine');

//     ////////////////////////////////////////////////////////////////////
//     // JASMINE
//     ////////////////////////////////////////////////////////////////////
//     gulp.task('jasmine', function() {
//         return gulp.src(OPTIONS.GLOB.TEST)
//             .pipe(
//                 jasmine({
//                     includeStackTrace: true,
//                     verbose: true
//                 })
//             );
//     });


//     ////////////////////////////////////////////////////////////////////
//     // TASKS
//     ////////////////////////////////////////////////////////////////////
//     gulp.task('test:jasmine', ['jasmine']);

//     gulp.task('watch:test', function() {
//         gulp.watch(OPTIONS.GLOB.JS, ['build:scripts', 'test:jasmine']);
//         gulp.watch(OPTIONS.GLOB.TEST, ['test:jasmine']);
//     })
// };