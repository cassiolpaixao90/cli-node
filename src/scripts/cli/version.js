/**
 * @author Cássio Paixão
 */
const program = require('commander');
const editJsonFile = require('../../helpers/file');

class Help {
  execute() {
    const file = editJsonFile('package.json');
    const version = file.get('version');
    program.version(version);
  }
}
module.exports = new Help();
