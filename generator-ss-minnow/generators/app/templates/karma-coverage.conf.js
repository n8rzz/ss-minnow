/*eslint-disable */
'use strict';

module.exports = function(config) {
    var istanbul = require('browserify-istanbul');
    var isparta = require('isparta');

    config.set({

        basePath: './',

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
                    instrumenter: isparta,
                    ignore: ['**/node_modules/**', '**/spec/**'],
                    defaultIgnore: true
                })
            ]
        },

        reporters: ['dots', 'coverage'],

        coverageReporter: {
            dir: './docs/coverage',
            reporters: [
                { type: 'html', subdir: '.' },
                { type: 'text' }
            ]
        },

        logLevel: 'warn',

        port: 9877,

        browsers: ['PhantomJS'],
    });
};
