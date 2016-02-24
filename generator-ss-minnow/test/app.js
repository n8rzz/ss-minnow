'use strict';
var path = require('path');
var fs = require('fs');
var rimraf = require('rimraf');
var temp = require('temp').track();
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ss-minnow:app', function () {
    var appPath = path.join(__dirname, '../generators/app');

    before(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), done);
    });

    after(function(done) {
        temp.cleanup();
        rimraf(path.join(__dirname, 'temp'), done);
    });

    describe('Application generator files', function() {
        before(function (done) {
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

        it('generate application config files', function() {
            assert.file([
                '.babelrc',
                '.eslintignore',
                '.eslintrc',
                '.gitignore',
                'Gulpfile.js',
                'karma-coverage.conf.js',
                'karma-tdd.conf.js',
                'karma.conf.js',
                'sass-lint.yml'
            ]);
        });

        it('should generate a package.json file', function() {
            assert.file('package.json');
        });

        it('should have populated package.json correctly', function (done) {
            fs.readFile('package.json', function (err, data) {
                if (err) {
                    done(err);
                } else {
                    var packageJson = JSON.parse(data);
                    assert.equal(packageJson.name, 'project-title');
                    assert.equal(packageJson.description, 'Description');
                    assert.equal(packageJson.version, '1.0.0');
                    done();
                }
            });
        });

        xit('should generate a `spec` directory', function() {});
        xit('should generate a `src` directory', function() {});
        xit('should generate a `tools` directory', function() {});
    });
});
