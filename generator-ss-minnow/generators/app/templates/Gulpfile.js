'use strict';

var OPTIONS = require('./tools/paths');
var gulp = require('gulp');

////////////////////////////////////////////////////////////////////
// EXTERNAL TASKS
////////////////////////////////////////////////////////////////////
require('./tools/tasks/clientStylesTasks')(gulp, OPTIONS);
require('./tools/tasks/clientJsTasks')(gulp, OPTIONS);
require('./tools/tasks/testTasks')(gulp, OPTIONS);
require('./tools/tasks/clientMarkupTasks')(gulp, OPTIONS);

////////////////////////////////////////////////////////////////////
// GULP TASKS
////////////////////////////////////////////////////////////////////
gulp.task('watch', ['watch:sass', 'watch:scripts', 'watch:markup']);
gulp.task('test', ['test:jasmine']);
gulp.task('build', ['build:sass', 'build:scripts', 'copy:markup']);
gulp.task('default', ['build']);
