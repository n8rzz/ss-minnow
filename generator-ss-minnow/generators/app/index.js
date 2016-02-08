'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');

module.exports = yeoman.generators.Base.extend({
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
          type: 'list',
          name: 'jsFlavor',
          label: 'Which flavor of Javascript?',
          message: 'Javascript flavor',
          default: 0,
          choices: [
              { name: 'es6',               value: 'es6' },
              { name: 'es5',               value: 'es5' },
          ]
      },
      {
          type: 'checkbox',
          name: 'additionalFeatures',
          label: 'Features',
          message: 'Additional Packages to include',
          choices: [
              { name: 'lodash',          value: 'lodash' },
              { name: 'jquery',          value: 'jquery' }
          ]
      }
    ];

    this.prompt(prompts, function (props) {
        this.props = props;
        console.log('### PROMPTS ###: ', this.props);
        // To access props later use this.props.someOption;

        done();
        }.bind(this));
    },

// configuring

    writing: {
        //Copy the configuration files
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
        },

        editorConfig: function() {
            this.fs.copy(
                this.templatePath('editorconfig'),
                this.destinationPath('.editorconfig')
            );
        },

        gulpFile: function() {

        },

        git: function() {
            this.fs.copy(
                this.templatePath('gitignore'),
                this.destinationPath('.gitignore')
            );
        },

        packageJSON: function() {
            this.fs.copyTpl(
                this.templatePath('_package.json'),
                this.destinationPath('package.json'), {
                    name: this.props.name,
                    version: this.props.version
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

    end: {
        var operationIsCompleteMessage =
        chalk.yellow('###########################################') +
        '\n\n\n' + chalk.green('S. S. Minnow launched!') +
        '\n\n\n' + chalk.yellow('Sail carefully!') +
        chalk.yellow('###########################################');

        this.log(operationIsCompleteMessage);
    }
});
