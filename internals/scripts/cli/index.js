'use strict';

const program = require('commander');
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const {
  prompt
} = require('inquirer');

const BaseBuilder = require('../../pattern/base-builder');

class InitCLIBuilder extends BaseBuilder {

  constructor() {
    super();
    this.init = this.initCLI();
    this.create = this.createCLI();
    this.generator = this.generatorCLI();
    this.end = this.endCLI();
    super.init();
  }

  initCLI() {

    clear();
    console.log(chalk.green(
      figlet.textSync('NodeJS Generator <3', {
        horizontalLayout: 'full'
      })
    ));

    program
      .description('start project nodejs + express');
  }

  createCLI() {

    this.options = [{
      type: 'input',
      name: 'name',
      message: 'Enter name project: '
    }];

    program
      .command('create')
      .alias('c')
      .description('Create Project')
      .action(() => {
        prompt(this.options).then((option) => {
          initialSetup(option.name.toString());
        });
      });
  }

  generatorCLI() {

    program
      .command('generate')
      .alias('g')
      .description('Generate Service')
      .action(() => {
        // generate();
        shell.echo('generator...')
        shell.exit(1);
      });
  }

  endCLI() {

    if (!process.argv.slice(2).length || !/[arudl]/.test(process.argv.slice(2))) {
      program.outputHelp();
      process.exit();
    }

    program.parse(process.argv)
  }
}

module.exports = new InitCLIBuilder();
