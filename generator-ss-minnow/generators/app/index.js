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
          type: 'list',
          name: 'jsFlavor',
          label: 'Which flavor of Javascript?',
          message: 'Javascript flavor',
          choices: [
          { name: 'es5',               value: 'es5' },
          { name: 'es6',               value: 'es6' },
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

  writing: function () {
    this.fs.copy(
      this.templatePath('dummyfile.txt'),
      this.destinationPath('dummyfile.txt')
    );
  },

  // install: function () {
  //   this.installDependencies();
  // }
});
