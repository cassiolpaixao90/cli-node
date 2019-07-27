/**
 * @author Cássio Paixão
 */

const CLIBuilder = require('./CLIBuilder');

/**
 * @class InitCLIBuilder
 * @description create a builder to intializer cli
 */
class InitCLIBuilder {
  constructor(argv) {
    this.builder = new CLIBuilder();
    this.argv = argv;
  }

  option(option = 'ms') {
    this.option = option;
    return this;
  }

  start() {
    this.builder.build();
  }
}

module.exports = InitCLIBuilder;
