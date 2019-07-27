/**
 * @author Cássio Paixão
 */

const program = require('commander');

class Exit {
  execute() {
    if (
      !process.argv.slice(2).length ||
      !/[arudl]/.test(process.argv.slice(2))
    ) {
      program.outputHelp();
      process.exit();
    }
  }
}
module.exports = new Exit();
