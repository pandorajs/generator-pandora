'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var PandoraGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
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
      name: 'extendedby',
      message: 'Base class that extended by',
      default: 'widget'
    }];

    function ucfirst (str) {
      return str.replace(/\w/, function ($0) {
        return $0.toUpperCase();
      });
    }

    this.prompt(prompts, function (props) {
      this.name = ucfirst(props.name);
      this.description = props.description;
      this.extendedby = ucfirst(props.extendedby);

      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('src');
    this.mkdir('test');
    this.mkdir('sea-modules');
    this.mkdir('node_modules');

    this.directory('vendor', 'vendor');

    this.template('_package.json', 'package.json');
    this.template('README.md', 'README.md');
    this.template('Gruntfile.js', 'Gruntfile.js');

    this.template('src.js', 'src/' + this.name.toLowerCase() + '.js');
    this.template('test.html', 'test/' + this.name.toLowerCase() + '.html');
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
