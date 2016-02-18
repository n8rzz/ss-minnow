'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;

describe('generator-ss-minnow:app', function () {
    beforeEach(function (done) {
        helpers.run(path.join(__dirname, '../generators/app'))
            .withOptions([
                { tcomb: true },
                { lodash: true }
            ])
            .withPrompts({someAnswer: true})
    .on('end', done);
    });

    it('creates config files', function () {
        assert.file([
            'package.json',
            '.bablerc',
            '.editorconfig',
            '.eslintrc',
            '.gitignore',
            'Gulpfile.js',
            'karma.conf.js'
        ]);
    });
});
