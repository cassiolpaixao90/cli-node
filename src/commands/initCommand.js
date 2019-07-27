/**
 * @author Cássio Paixão
 */

const figlet = require('figlet');
const chalk = require('chalk');
const clear = require('clear');

class InitCommand {
  execute() {
    clear();
    console.log(
      chalk.white(
        figlet.textSync('Test', {
          horizontalLayout: 'full'
        })
      )
    );
  }
}

module.exports = InitCommand;
