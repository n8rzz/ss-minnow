'use strict';

var OPTIONS = require('./tools/paths');
var gulp = require('gulp');
var ROOT_DIR = __dirname;

////////////////////////////////////////////////////////////////////
// EXTERNAL TASKS
////////////////////////////////////////////////////////////////////
require('./tools/tasks/globalTasks')(gulp, OPTIONS);
require('./tools/tasks/clientStylesTasks')(gulp, OPTIONS);
require('./tools/tasks/clientScriptsTasks')(gulp, OPTIONS);
require('./tools/tasks/clientMarkupTasks')(gulp, OPTIONS);
require('./tools/tasks/docsTasks')(gulp, OPTIONS);
require('./tools/tasks/testTasks')(gulp, OPTIONS, ROOT_DIR);

////////////////////////////////////////////////////////////////////
// GULP TASKS
////////////////////////////////////////////////////////////////////
gulp.task('watch', ['watch:sass', 'watch:scripts', 'watch:markup']);
gulp.task('build', ['clean', 'build:sass', 'build:scripts', 'copy:markup', 'lint:scripts']);
gulp.task('docs', ['clean:docs', 'docs:yui']);
gulp.task('coverage', ['connect:coverage']);
gulp.task('tdd', ['watch:test:tdd'])
gulp.task('default', ['build']);
