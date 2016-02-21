'use strict';

module.exports = function(gulp, config, ROOT) {
    var OPTIONS = config;
    var path = require('path');
    var clear = require('clear');
    var shell = require('gulp-shell');
    var Karma = require('karma').Server;


    ////////////////////////////////////////////////////////////////////
    // UTILITY FUNCTIONS
    ////////////////////////////////////////////////////////////////////
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
        // TODO - refactor: this can be cleaner
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


    // TODO - implement chalk or colorization
    // TODO - watch src/*.js files, find matching test then run
    ////////////////////////////////////////////////////////////////////
    // JASMINE/KARMA - TDD
    ////////////////////////////////////////////////////////////////////
    gulp.task('watch:test:tdd', function(done) {
        return gulp.watch(OPTIONS.GLOB.TEST, function(event) {
            clear();

            var configPath = path.join(ROOT, 'karma-tdd.conf.js');
            var readablePathToTestFile = composePathToTestString(event.path);

            console.log('\n========================================================================');
            console.log('Running modified file: ', readablePathToTestFile);
            console.log('------------------------------------------------------------------------');

            var karmaServer = new Karma({
                configFile: configPath,
                files: [event.path],
                singleRun: true
            }, function() {
                // empty callback to allow for the watch to continue to run
                // not quit after one run.
            });

            karmaServer.start();
       });
    });

    ////////////////////////////////////////////////////////////////////
    // JASMINE/KARMA - RUN ALL TESTS
    ////////////////////////////////////////////////////////////////////
    gulp.task('test:scripts:all', shell.task('karma start --single-run'));

    ////////////////////////////////////////////////////////////////////
    // KARMA/ISTANBUL - GENERATE COVERAGE REPORTS
    ////////////////////////////////////////////////////////////////////
    gulp.task('test:scripts:coverage', ['clean:docs:coverage'], shell.task('karma start karma-coverage.conf.js --single-run'));
}
