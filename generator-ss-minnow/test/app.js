'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');
var rimraf = require('rimraf');
var temp = require('temp').track();

describe('generator-ss-minnow:app', function () {
    var appPath = path.join(__dirname, '../generators/app');

    before(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), done);
    });

    after(function(done) {
        temp.cleanup();

        rimraf(path.join(__dirname, 'temp'), done);
    });


    beforeEach(function (done) {
        // helpers.testDirectory(path.join(__dirname, 'temp'), done);

        helpers.run(require.resolve(appPath))
            .withPrompts({
                title: 'Project Title',
                name: 'project-title',
                description: 'Description',
                version: '1.0.0'
            })
            .withOptions([
                { shouldUseBower: false, },
                { tcomb: true },
                { lodash: true }
            ])
            .on('end', done);
    });



    it('should generate a .babelrc file', function() {
        assert.file('.babelrc');
    });

    // it('should generate a .bowerrc file', function() {
    //     assert.file('.bowerrc');
    // });

    // it('should generate a .bowerrc file', function() {
    //     assert.file('.bowerrc');
    // });

    // it('should generate an .editorconfig file', function() {
    //     assert.file('editorconfig');
    // });

    it('should generate an .eslintignore file', function() {
        assert.file('.eslintignore');
    });

    it('should generate an .eslintrc file', function() {
        assert.file('.eslintrc');
    });

    it('should generate a .gitignore file', function() {
        assert.file('.gitignore');
    });

    it('should generate a Gulpfile.js file', function() {
        assert.file('Gulpfile.js');
    });

    it('should generate a karma-coverage.conf.js file', function() {
        assert.file('karma-coverage.conf.js');
    });

    it('should generate a karma-tdd.conf.js file', function() {
        assert.file('karma-tdd.conf.js');
    });

    it('should generate a karma.conf.js file', function() {
        assert.file('karma.conf.js');
    });

    it('should generate a sass-lint.yml file', function() {
        assert.file('sass-lint.yml');
    });

    it('should generate a package.json file', function() {
        assert.file('package.json');
    });
});
