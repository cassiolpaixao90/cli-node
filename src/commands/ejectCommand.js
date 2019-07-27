/**
 * @author Cássio Paixão
 */

const scripts = require('../scripts/cli');

class EjectCommand {
  constructor() {
    this.script = scripts.exit;
  }

  execute() {
    this.script.execute();
  }
}

module.exports = EjectCommand;
