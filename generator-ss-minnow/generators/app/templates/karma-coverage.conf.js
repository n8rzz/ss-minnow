/*eslint-disable */
'use strict';

module.exports = function(config) {
    var istanbul = require('browserify-istanbul');
    var isparta = require('isparta');

    config.set({

        basePath: './',
        plugins: [
            'karma-jasmine',
            'karma-browserify',
            'karma-phantomjs-launcher',
            'karma-coverage'
        ],
        frameworks: ['browserify', 'jasmine'],

        files: [
            { pattern: './spec/**/*.spec.js', included: true },
            { pattern: './src/**/*.js', included: false }
        ],

        preprocessors: {
            'src/**/*.js': ['browserify', 'coverage'],
            'spec/**/*.spec.js': ['browserify']
        },

        browserify: {
            debug: true,
            bundleDealy: 1000,
            transform: [
                'babelify',
                istanbul({
                    ignore: ['**/node_modules/**', '**/spec/**'],
                    defaultIgnore: true
                })
            ]
        },

        reporters: ['dots', 'coverage'],

        coverageReporter: {
            dir: './docs/coverage',
            instrumenters: { isparta: isparta },
            // instrumenter: {
            //     '**/*.js': 'isparta'
            // },
            reporters: [
                // { type: 'html', subdir: '.' },
                { type: 'text' }
            ]
        },

        logLevel: 'warn',

        browsers: ['PhantomJS'],
    });
};
