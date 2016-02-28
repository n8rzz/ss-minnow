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
            'src/**/*.js': ['browserify', 'sourcemap', 'coverage'],
            'spec/**/*.spec.js': ['browserify']
        },

        babelPreprocessor: {
            options: {
                sourceMap: 'inline'
            },
            sourceFileName: function(file) {
                return file.originalPath;
            }
        },

        browserify: {
            debug: true,
            bundleDealy: 1000,
            transform: [
                istanbul({
                    instrumenter: isparta,
                    ignore: ['**/node_modules/**', '**/spec/**'],
                    defaultIgnore: true
                }),
                'babelify'
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
