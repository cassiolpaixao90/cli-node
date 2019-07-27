/**
 * @author Cássio Paixão
 */
const scripts = require('../scripts/cli');

class HelpCommand {
  constructor() {
    this.script = scripts.help;
  }

  execute() {
    this.script.execute();
  }
}

module.exports = HelpCommand;
