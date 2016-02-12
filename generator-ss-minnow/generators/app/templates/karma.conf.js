module.exports = function(config) {
    config.set({

        basePath: '',
        plugins: [
            'karma-jasmine',
            'karma-browserify',
            'karma-phantomjs-launcher',
            'karma-spec-reporter',
            'karma-coverage'
        ],
        frameworks: ['jasmine', 'browserify'],

        files: [
            'src/**/*.js',
            'spec/**/*.js'
        ],

        exclude: [],

        preprocessors: {
            'src/**/*.js': ['browserify'],
            'spec/**/*.js': ['browserify']
        },

        browserify: {
            debug: true,
            transform: [ 'babelify' ]
        },

        browsers: ['PhantomJS'],

        logLevel: 'warn',

        reporters: ['spec', 'coverage'],
        specReporter: {
            maxLogLines: 5,               // limit number of lines logged per test
            suppressErrorSummary: true,   // do not print error summary
            suppressFailed: false,        // do not print information about failed tests
            suppressPassed: false,        // do not print information about passed tests
            suppressSkipped: true         // do not print information about skipped tests
        },

        // coverageReporter: {
        //     type: 'text'
        // }

        // coverageReporter: {
        //     reporters: [
        //         { type: 'html', dir: 'coverage/' },
        //         { type: 'text' }
        //     ]
        // }
    });
};
