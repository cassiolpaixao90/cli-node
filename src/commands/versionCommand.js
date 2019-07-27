/**
 * @author Cássio Paixão
 */
const program = require('commander');

class VersionCommand {
  execute() {
    program.version('0.1.0');
    program.parse(process.argv);
  }
}

module.exports = VersionCommand;
