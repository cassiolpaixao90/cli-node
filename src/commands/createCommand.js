/**
 * @author Cássio Paixão
 */
const { prompt } = require('inquirer');
const program = require('commander');
const scripts = require('../scripts/cli');

class CreateCommand {
  constructor() {
    this.script = scripts.create;
  }

  options() {
    return {
      type: 'input',
      name: 'name',
      message: 'Enter name project: '
    };
  }

  execute() {
    program
      .command('create')
      .alias('c')
      .description('Create a new project')
      .action(() => {
        prompt(this.options()).then(option => {
          this.script.execute(String(option.name) || 'my-app');
        });
      });
  }
}

module.exports = CreateCommand;
