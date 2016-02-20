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
gulp.task('docs', ['clean:docs', 'docs:yui']);
gulp.task('coverage', ['connect:coverage']);
gulp.task('tdd', ['watch:test:tdd'])
gulp.task('default', ['build']);



// TODO - move to external `testTasks` file
// ISSUE - OPTIONS.ROOT appears to be relative when used furthur down the file structure
// TODO - inplement chalk or colorization
// TODO - watch src/*.js files, find matching test then run
////////////////////////////////////////////////////////////////////
// JASMINE - TDD
////////////////////////////////////////////////////////////////////
var path = require('path');
var karma = require('karma').server;

/**
 * Trim full path of test file to something more readable
 *
 * if given path `root/path/to/spec/app.spec.js
 * return will be `spec/app.spec.js`
 *
 * @method compsePathToTestString
 * @param  {String} path  Full path string to file that triggered watch
 * @return {String}
 */
function composePathToTestString(path) {
    var CHARS_TO_REMOVE = 2;
    var SEPERATOR = '/';
    var SPEC_DIR = OPTIONS.DIR.TEST.slice(CHARS_TO_REMOVE);
    var folderList = path.split(SEPERATOR);
    var testDirIndex = folderList.indexOf(SPEC_DIR);

    if (testDirIndex !== -1) {
        var readablePathToTest = folderList.slice(testDirIndex).join(SEPERATOR);
        return readablePathToTest;
    }

    return path;
}

gulp.task('watch:test:tdd', function(done) {
    return gulp.watch(OPTIONS.GLOB.TEST, function(event) {
        var configPath = path.join(__dirname, 'karma-tdd.conf.js');
        var readablePathToTestFile = composePathToTestString(event.path);

        console.log('\n\n========================================================================');
        console.log('Running modified file: ', readablePathToTestFile);
        console.log('------------------------------------------------------------------------');

        karma.start({
            configFile: configPath,
            files: [event.path],
            singleRun: true
        }, function() {
            // empty callback to allow for the watch to continue to run
            // not quit after one run.
        });
   });
});
