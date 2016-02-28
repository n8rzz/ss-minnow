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

    describe('Application generator files with default options', function() {
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
                'README.md',
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
    });

    xdescribe('Application generator files when shouldUseBower is true', function() {
        before(function (done) {
            helpers.run(require.resolve(appPath))
                .withPrompts({
                    title: 'Project Title',
                    name: 'project-title',
                    description: 'Description',
                    version: '1.0.0'
                })
                .withOptions([
                    { shouldUseBower: true, },
                    { tcomb: true },
                    { lodash: true }
                ])
                .on('end', done);
        });

        it('generate application config files', function() {
            assert.file([
                '.babelrc',
                '.bowerrc',
                '.eslintignore',
                '.eslintrc',
                '.gitignore',
                'Gulpfile.js',
                'karma-coverage.conf.js',
                'karma-tdd.conf.js',
                'karma.conf.js',
                'README.md',
                'sass-lint.yml'
            ]);
        });

        it('generate a bower.json file', function() {
            assert.file('bower.json');
        });

        it('populate bower.json correctly', function (done) {
            fs.readFile('bower.json', function (err, data) {
                if (err) {
                    done(err);
                } else {
                    var bowerJson = JSON.parse(data);
                    assert.equal(bowerJson.name, 'project-title');
                    assert.equal(bowerJson.description, 'Description');
                    assert.equal(bowerJson.version, '1.0.0');
                    done();
                }
            });
        });
    });

    describe('generate spec directory', function() {
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

        it('with test files', function() {
            assert.file([
                'spec/app.spec.js',
                'spec/main.spec.js',
                'spec/util/assert.spec.js'
            ]);
        });
    });

    describe('generate source directory', function() {
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

        describe('and a scripts directory', function() {
            it('with an index.html file', function() {
                assert.file('src/index.html');
            });

            it('with a main.js file', function() {
                assert.file('src/assets/scripts/main.js');
            });

            it('with an app.js file', function() {
                assert.file('src/assets/scripts/app.js');
            });

            it('with an assert.js file', function() {
                assert.file('src/assets/scripts/util/assert.js');
            });
        });

        describe('and an scss directory', function() {
            it('with a modern.scss file', function() {
                assert.file('src/assets/scss/modern.scss');
            });

            it('with a legacy.scss file', function() {
                assert.file('src/assets/scss/legacy.scss');
            });

            it('with a _screen_md.scss file', function() {
                assert.file('src/assets/scss/_screen_md.scss');
            });

            it('with a _screen_sm.scss file', function() {
                assert.file('src/assets/scss/_screen_sm.scss');
            });
        });

        describe('and a tools directory', function() {
            it('with a paths.js file', function() {
                assert.file('tools/paths.js');
            });

            it('with gulp tasks files', function() {
                assert.file([
                    'tools/tasks/clientMarkupTasks.js',
                    'tools/tasks/clientScriptsTasks.js',
                    'tools/tasks/clientStylesTasks.js',
                    'tools/tasks/docsTasks.js',
                    'tools/tasks/globalTasks.js',
                    'tools/tasks/testTasks.js'
                ]);
            });
        });
    });


});
