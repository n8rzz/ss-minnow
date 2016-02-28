'use strict';
var yeoman = require('yeoman-generator').Base;
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');
var pkg = require('../../../package.json');

/**
 * @method hasMod
 * @param  {String} mod
 * @param  {object} props
 * @return {Boolean}
 */
// var hasMod = function hasMod(mod, props) {
//     return props.additionalFeatures.indexOf(mod) !== -1;
// };

var App = yeoman.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
        'Welcome to the ' + chalk.red('generator-ss-minnow') + ' generator!'
    ));

    var prompts = [
        {
            type: 'input',
            name: 'title',
            label: 'Name',
            message: 'What is the name of your project?',
                default: function() {
                return path.basename(process.cwd());
            }
        },
        {
            type: 'input',
            name: 'name',
            label: 'Slug',
            message: 'What would you like the slug to be?',
            default: function(answers) {
                var title = answers.title || 'client-project';

                return title
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, '-')
                    .replace(/^\-+|\-+$/g, '');
            }
        },
        {
            type: 'input',
            name: 'description',
            label: 'Description',
            message: 'One-line description',
            default: 'A sentence to hold the place of a project description'
        },
        {
            type: 'input',
            name: 'version',
            label: 'Version',
            message: 'Version number (major.minor.patch)',
            default: '1.0.0',
            validate: function(answer) {
                if (!(/^\d+\.\d+\.\d+([+\-]\S*)?$/).test(answer)) {
                    return 'Must adhere to SemVer spec (major.minor.patch): http://semver.org/';
                }

                return true;
            }
        },
        {
            type: 'confirm',
            name: 'shouldUseBower'  ,
            message: 'Do you need Bower for FE dependencies',
            default: false
        },
        {
            type: 'confirm',
            name: 'hasLodash'  ,
            message: 'Would you like to include lodash',
            default: true
        },
        {
            type: 'confirm',
            name: 'hasTcomb'  ,
            message: 'Would you like to include tcomb',
            default: true
        }
        // ,
        // {
        //     type: 'checkbox',
        //     name: 'additionalFeatures',
        //     label: 'Features',
        //     message: 'Additional Packages to include',
        //     choices: [
        //         { name: 'lodash',          value: 'lodash' },
        //         { name: 'tcomb',           value: 'tcomb' }
        //     ]
        // }
    ];

    this.prompt(prompts, function (props) {
        this.props = props;
        // console.log('props: ', props);
        // this.hasLodash = false; // hasMod('lodash', props);
        // this.hasTcomb = false; // hasMod('tcomb', props);

        // if (this.props.additionalFeatures.indexOf('lodash') !== -1) {
        //     this.hasLodash = true;
        // }

        // if (this.props.additionalFeatures.indexOf('tcomb') !== -1) {
        //     this.hasTcomb = true;
        // }


        done();
    }
    .bind(this));

    },


    writing: {
        writeOptionsToConfig: function() {
            this.config.set('package', {
                version: pkg.version,
                timestamp: new Date().toLocaleString()
            });

            this.config.set('package-options', {
                'name': this.props.name,
                'version': this.props.version,
                'description': this.props.description,
                'shouldUseBower': this.props.shouldUseBower,
                'hasLodash': this.props.hasLodash,
                'hasTcomb': this.props.hasTcomb
            });

            this.config.save();
        },

        config: function() {
            if (this.props.shouldUseBower) {
                this.fs.copyTpl(
                    this.templatePath('_bower.json'),
                    this.destinationPath('bower.json'), {
                        name: this.props.name,
                        version: this.props.version
                });

                this.fs.copy(
                    this.templatePath('bowerrc'),
                    this.destinationPath('.bowerrc')
                );
            }

            this.fs.copy(
                this.templatePath('babelrc'),
                this.destinationPath('.babelrc')
            );

            this.fs.copy(
                this.templatePath('eslintignore'),
                this.destinationPath('.eslintignore')
            );

            this.fs.copy(
                this.templatePath('karma.conf.js'),
                this.destinationPath('karma.conf.js')
            ),

            this.fs.copy(
                this.templatePath('karma-coverage.conf.js'),
                this.destinationPath('karma-coverage.conf.js')
            ),

            this.fs.copy(
                this.templatePath('karma-tdd.conf.js'),
                this.destinationPath('karma-tdd.conf.js')
            ),

            this.fs.copy(
                this.templatePath('eslintrc'),
                this.destinationPath('.eslintrc')
            );
        },

        editorConfig: function() {
            this.fs.copy(
                this.templatePath('editorconfig'),
                this.destinationPath('.editorconfig')
            );

        },

        gulpFile: function() {
            this.fs.copyTpl(
                this.templatePath('Gulpfile.js'),
                this.destinationPath('Gulpfile.js'), {
                    name: this.props.name,
                    version: this.props.version
            });

            this.fs.copy(
                this.templatePath('tools'),
                this.destinationPath('tools')
            );

        },

        git: function() {
            this.fs.copy(
                this.templatePath('gitignore'),
                this.destinationPath('.gitignore')
            );

        },

        html: function() {
            this.fs.copyTpl(
                this.templatePath('src/index.html'),
                this.destinationPath('src/index.html'), {
                    title: this.props.title
            });
        },

        packageJSON: function() {
            this.fs.copyTpl(
                this.templatePath('_package.json'),
                this.destinationPath('package.json'), {
                    name: this.props.name,
                    version: this.props.version,
                    description: this.props.description,
                    includeLodash: this.props.hasLodash,
                    includeTcomb: this.props.hasTcomb
            });
        },

        scss: function() {
            this.fs.copy(
                this.templatePath('sass-lint.yml'),
                this.destinationPath('sass-lint.yml')
            );

            this.fs.copy(
                this.templatePath('src/assets/scss'),
                this.destinationPath('src/assets/scss')
            );
        },

        scripts: function() {
            this.fs.copy(
                this.templatePath('src/assets/scripts'),
                this.destinationPath('src/assets/scripts')
            );
        },

        spec: function() {
            this.fs.copy(
                this.templatePath('spec'),
                this.destinationPath('spec')
            );
        }
    },

    end: function() {
        var operationIsCompleteMessage =
        '\n\n\n' +
        chalk.gray('######################################################################################') +
        '\n\n\t----------------------------------------' +
        '\n\t\t' + chalk.green('S.S. Minnow launched!') +
        '\n\t----------------------------------------' +
        '\n\n\trun ' + chalk.green('npm install') + ' to install dependencies' +
        '\n\tthen ' + chalk.green('gulp build') + ' to start an initial build of the project' +
        '\n\n\n\tAvailable NPM Tasks:' +
        '\n\t' + chalk.yellow('npm run test') + chalk.gray('- [alias:') + chalk.cyan(' gulp test') + chalk.gray('] - run tests') +
        '\n\t' + chalk.yellow('npm run coverage') + chalk.gray('- [alias:') + chalk.cyan(' gulp coverage') + chalk.gray('] - generate coverage reports') +
        '\n' +
        '\n\n\tAvailable Gulp Tasks:' +
        '\n\t' + chalk.yellow('gulp build') +
        '\n\t' + chalk.yellow('gulp watch') +
        '\n\t' + chalk.yellow('gulp lint') + chalk.gray(' - lint SASS and Javascript files') +
        '\n\t' + chalk.yellow('gulp test') + chalk.gray(' - run entire test suite') +
        '\n\t' + chalk.yellow('gulp tdd') + chalk.gray(' - run tests onChange for only the modified test file') +
        '\n\t' + chalk.yellow('gulp docs') + chalk.gray(' - generate documentation (API and Coverage reports)') +
        '\n\t' + chalk.yellow('gulp coverage') + chalk.gray(' - generate coverage reports') +
        '\n\n\n' +
        chalk.gray('######################################################################################') +
        '\n\n\n';

        this.log(operationIsCompleteMessage);
    }
});

module.exports = App;