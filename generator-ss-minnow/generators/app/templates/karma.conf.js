/*eslint-disable */
'use strict';

module.exports = function(config) {
    config.set({

        basePath: '',
        plugins: [
            'karma-jasmine',
            'karma-browserify',
            'karma-phantomjs-launcher',
            'karma-spec-reporter'
        ],
        frameworks: ['jasmine', 'browserify'],

        files: [
            'src/**/*.js',
            'spec/**/*.spec.js'
        ],

        browsers: ['PhantomJS'],

        exclude: [],

        reporters: ['spec'],

        preprocessors: {
            '**src/**/*.js': ['browserify'],
            'spec/**/*.spec.js': ['browserify']
        },

        browserify: {
            debug: true,
            transform: [ 'babelify' ]
        },

        logLevel: 'warn',

        specReporter: {
            maxLogLines: 5,               // limit number of lines logged per test
            suppressErrorSummary: true,   // do not print error summary
            suppressFailed: false,        // do not print information about failed tests
            suppressPassed: false,        // do not print information about passed tests
            suppressSkipped: true         // do not print information about skipped tests
        }
    });
};
