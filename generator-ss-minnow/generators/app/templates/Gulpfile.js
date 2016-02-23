'use strict';

process.chdir(__dirname);

var OPTIONS = require('./tools/paths');
var CLI = require('./tools/cli');
var gulp = require('gulp');
var runSequence = require('run-sequence');
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
// UNIFIED GULP TASKS
////////////////////////////////////////////////////////////////////
gulp.task('build', function() {
    runSequence(
        'clean',
        ['build:sass', 'build:scripts', 'copy:markup'],
        'lint:scripts',
        'lint:sass'
    );
});
gulp.task('lint', function() {
    runSequence(
        'lint:sass',
        'lint:scripts'
    )
});
gulp.task('watch', ['watch:sass', 'watch:scripts', 'watch:markup']);
gulp.task('docs', ['docs:yui', 'test:scripts:coverage']);
gulp.task('test', ['test:scripts:all']);
gulp.task('coverage', ['test:scripts:coverage']);
gulp.task('tdd', ['watch:test:tdd'])
gulp.task('default', ['build']);
