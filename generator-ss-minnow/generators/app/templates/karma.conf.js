module.exports = function(config) {
    config.set({

        basePath: '',
        plugins: ['karma-jasmine', 'karma-browserify', 'karma-phantomjs-launcher'],
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

        browsers: ['PhantomJS']
    });
};