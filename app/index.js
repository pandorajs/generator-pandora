'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var PandoraGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      console.log(chalk.magenta('please run spm install and npm install!'));
    });
  },

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    this.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    this.log(chalk.magenta('don\'t forget to run spm install after generator is done!'));

    var prompts = [{
      name: 'name',
      message: 'What is the name of your project?',
      default: this.appname
    }, {
      name: 'description',
      message: 'Your project description',
      default: ''
    }, {
      name: 'extendName',
      message: 'Base class that extended by',
      default: 'pandora-widget'
    }];

    function ucfirst (str) {
      return str.replace(/\w/, function ($0) {
        return $0.toUpperCase();
      });
    }

    function getClassName(str) {
      return ucfirst(str.replace('pandora-', ''));
    }

    this.prompt(prompts, function (props) {
      this.name = props.name;
      this.version = props.version;
      this.varName = getClassName(props.name);
      this.description = props.description;
      this.extendName = props.extendName;
      this.extendClassName = getClassName(props.extendName);
      this.contents = '<%= contents %>';
      done();
    }.bind(this));
  },

  app: function () {
    this.directory('examples', 'examples');
    this.directory('tests', 'tests');

    this.template('_package.json', 'package.json');
    this.template('README.md', 'README.md');
    this.template('HISTORY.md', 'HISTORY.md');
    this.template('Gulpfile.js', 'Gulpfile.js');

    this.template('index.js', 'index.js');
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
    this.copy('gitignore', '.gitignore');
    this.copy('travis.yml', '.travis.yml');
    this.copy('LICENSE-MIT', 'LICENSE-MIT');
  }
});

module.exports = PandoraGenerator;
