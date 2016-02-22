'use strict';

module.exports = function(gulp, config, ROOT) {
    var OPTIONS = config;
    var path = require('path');
    var clear = require('clear');
    var shell = require('gulp-shell');


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


    ////////////////////////////////////////////////////////////////////
    // JASMINE/KARMA - TDD
    ////////////////////////////////////////////////////////////////////
    gulp.task('watch:test:tdd', function(done) {
        // var runner = require('karma').runner;
        var Karma = require('karma').Server;
        var configPath = path.join(ROOT, 'karma-tdd.conf.js');

        var karmaServer = new Karma({
            configFile: configPath,
            files: [OPTIONS.GLOB.TEST]
        }, done);

        karmaServer.start();


        /**
         * Intent was to use gulp to determine which file change triggered the watch (works),
         * then feed only that file to a running instance of karma to run ONLY that test (works.
         *
         * All this works however, as you can see below, in order for this to work you had to create
         * a new karma instance every time a watch triggers.  Setting concurrancy in the config to 1
         * had no noticable effect.
         *
         * Problems encountered:
         * - built in auto watch runs entire suite
         * - runner.run didn't work as expected
         * - the karma api doesn't support a `server.stop()` command, so there isn't a way to
         *     programatically stop a running karma instance.
         *
         * @deprecated
         */
       // TODO - watch src/*.js files, find matching test then run
       //  return gulp.watch(OPTIONS.GLOB.TEST, function(event) {
       //      clear();

       //      var configPath = path.join(ROOT, 'karma-tdd.conf.js');
       //      var readablePathToTestFile = composePathToTestString(event.path);

       //      console.log('\n========================================================================');
       //      console.log('Running modified file: ', readablePathToTestFile);
       //      console.log('------------------------------------------------------------------------');

       //      if (!karmaServer) {
       //          var karmaServer = new Karma({
       //              configFile: configPath,
       //              files: [event.path],
       //              singleRun: false, // TODO - move to config
       //              restartOnFileChange: true // TODO - move to config
       //          }, function() {
       //              // empty callback to allow for the watch to continue to run
       //              // not quit after one run.
       //          });

       //          karmaServer.start();
       //      } else {
       //          runner.run({
       //              files: [event.path],
       //              port: 9876
       //          }, function(exitCode) {
       //              console.log('karma exited with ecit code: ', exitCode);
       //          });
       //      }
       // });
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
