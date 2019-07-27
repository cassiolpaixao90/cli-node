/**
 * @author Cássio Paixão
 */
const { prompt } = require('inquirer');
const program = require('commander');
const scripts = require('../scripts/cli');

class GenerateCommand {
  constructor() {
    this.script = scripts.create;
  }

  options() {
    return {
      type: 'input',
      name: 'name',
      message: 'Enter name module: '
    };
  }

  execute() {
    program
      .command('generate')
      .alias('g')
      .description('Generate a new module')
      .action(() => {
        prompt(this.options()).then(option => {
          console.log('generate', String(option.name));
        });
      });
  }
}

module.exports = GenerateCommand;
