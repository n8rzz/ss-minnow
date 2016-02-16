'use strict';
var yeoman = require('yeoman-generator').Base;
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');

module.exports = yeoman.extend({
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
            default: ''
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
            type: 'checkbox',
            name: 'additionalFeatures',
            label: 'Features',
            message: 'Additional Packages to include',
            choices: [
                { name: 'lodash',          value: 'lodash' },
                { name: 'tcomb',           value: 'tcomb' }
            ]
        }
    ];

    this.prompt(prompts, function (props) {
        this.props = props;

        this.hasLodash = '';
        this.hasTcomb = '';

        done();
    }
    .bind(this));

    },


    writing: {
        config: function () {
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
                this.templatePath('karma.conf.js'),
                this.destinationPath('karma.conf.js')
            ),

            this.fs.copy(
                this.templatePath('karma-coverage.conf.js'),
                this.destinationPath('karma-coverage.conf.js')
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
            var includeLodash;
            var includeTcomb;

            if (this.props.additionalFeatures.indexOf('lodash') !== -1) {
                includeLodash = true
            } else {
                includeLodash = false;
            }

            if (this.props.additionalFeatures.indexOf('tcomb') !== -1) {
                includeTcomb = true
            } else {
                includeTcomb = false;
            }

            this.fs.copyTpl(
                this.templatePath('_package.json'),
                this.destinationPath('package.json'), {
                    name: this.props.name,
                    version: this.props.version,
                    includeLodash: includeLodash,
                    includeTcomb: includeTcomb
            });
        },

        scss: function() {
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

    // install: function () {
    //     this.installDependencies({
    //         bower: false,
    //         npm: true,
    //         callback: function () {
    //             console.log('npm packages installed successfully!');
    //         }
    //     });
    // },

    end: function() {
        var operationIsCompleteMessage =
        '\n\n\n' +
        chalk.gray('######################################################################################') +
        '\n\n\t----------------------------------------' +
        '\n\t\t' + chalk.green('S.S. Minnow launched!') +
        '\n\t----------------------------------------' +
        '\n\n\t' + 'Once you\'re ready to get underway' +
        '\n\n\trun ' + chalk.green('npm install') + ' to install dependencies' +
        '\n\tand ' + chalk.green('gulp build') + ' to start an initial build of the project' +
        '\n\n\t\tAvailable NPM Tasks:' +
        '\n\t\t' + chalk.cyan('npm run test') + chalk.gray('- run tests') +
        '\n\t\t' + chalk.cyan('npm run coverage') + chalk.gray('- generate coverage reports') +
        '\n' +
        '\n\n\t\tAvailable Gulp Tasks:' +
        '\n\t\t' + chalk.cyan('gulp build') +
        '\n\t\t' + chalk.cyan('gulp watch') +
        '\n\n\n' +
        chalk.gray('######################################################################################') +
        '\n\n\n';

        this.log(operationIsCompleteMessage);
    }
});
