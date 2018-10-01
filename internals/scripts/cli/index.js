'use strict';

const program = require('commander');
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const {
  prompt
} = require('inquirer');

const InitialSetup = require('../setup')

const BaseBuilder = require('../../pattern/base-builder');

/**
 * @class InitCLIBuilder
 * @extends {BaseBuilder}
 * @description create a builder to intializer cli
 * @author Cássio Paixão
 */
class InitCLIBuilder extends BaseBuilder {

  constructor() {
    super();
    this.init = this.initCLI();
    this.create = this.createCLI();
    this.generator = this.generatorCLI();
    this.end = this.endCLI();
    super.init();
  }

  /**
   * @method initCLI
   * @description Intializer CLI
   */
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


  /**
   * @method createCLI
   * @description create options questions to CLI
   */
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
          InitialSetup.init(option.name.toString());
        });
      });
  }


  /**
   * @method generatorCLI
   * @description generate a new service
   */
  generatorCLI() {

    this.options = [{
      type: 'input',
      name: 'name',
      message: 'Enter name module: '
    }];

    program
      .command('generate')
      .alias('g')
      .description('Generate Service')
      .action(() => {
        prompt(this.options).then((option) => {
          InitialSetup.generator(option.name.toString());
        });
      });
  }


  /**
   * @method endCLI
   * @description finalize CLI
   */
  endCLI() {

    if (!process.argv.slice(2).length || !/[arudl]/.test(process.argv.slice(2))) {
      program.outputHelp();
      process.exit();
    }

    program.parse(process.argv)
  }
}

module.exports = new InitCLIBuilder();
