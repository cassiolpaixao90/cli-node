/**
 * @author Cássio Paixão
 */
const CLI = require('./cli');

class InitCLIBuilder {
  run(argv) {
    return new CLI(argv).option().start();
  }
}

module.exports = new InitCLIBuilder();
