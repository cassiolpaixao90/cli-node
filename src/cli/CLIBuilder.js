/**
 * @author Cássio Paixão
 */
const conductor = require('../commands');
const CreateCommand = require('../commands/createCommand');
const HelpCommand = require('../commands/helpCommand');
const VersionCommand = require('../commands/versionCommand');
const InitCommand = require('../commands/initCommand');
const GenerateCommand = require('../commands/generateCommand');
const EjectCommand = require('../commands/ejectCommand');

class CLI {
  build() {
    this.init();
    this.create();
    this.generate();
    this.help();
    this.version();
    this.exit();
  }
}

class CLIBuilder extends CLI {
  init() {
    conductor.run(new InitCommand());
  }

  create() {
    conductor.run(new CreateCommand());
  }

  generate() {
    conductor.run(new GenerateCommand());
  }

  help() {
    conductor.run(new HelpCommand());
  }

  version() {
    conductor.run(new VersionCommand());
  }

  exit() {
    conductor.run(new EjectCommand());
  }
}

module.exports = CLIBuilder;
