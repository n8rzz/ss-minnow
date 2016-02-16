'use strict';

var OPTIONS = require('./tools/paths');
var gulp = require('gulp');

////////////////////////////////////////////////////////////////////
// EXTERNAL TASKS
////////////////////////////////////////////////////////////////////
require('./tools/tasks/globalTasks')(gulp, OPTIONS);
require('./tools/tasks/clientStylesTasks')(gulp, OPTIONS);
require('./tools/tasks/clientScriptsTasks')(gulp, OPTIONS);
require('./tools/tasks/clientMarkupTasks')(gulp, OPTIONS);
require('./tools/tasks/docsTasks')(gulp, OPTIONS);

////////////////////////////////////////////////////////////////////
// GULP TASKS
////////////////////////////////////////////////////////////////////
gulp.task('watch', ['watch:sass', 'watch:scripts', 'watch:markup']);
gulp.task('build', ['clean', 'build:sass', 'build:scripts', 'copy:markup', 'lint:scripts']);
gulp.task('docs', ['coverage']);
gulp.task('default', ['build']);
