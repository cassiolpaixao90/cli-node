/**
 * @author Cássio Paixão
 */
const shell = require('shelljs');

class Git {
  build(name) {
    this.init();
    this.clone(name);
    this.remove(name);
  }
}

class GitBuilder extends Git {
  init() {
    shell.echo('starting configuration...');
  }

  clone(name) {
    if (
      shell.exec(
        `git clone https://github.com/cassiolpaixao90/grpc-gateway-node.git ${name}`
      ).code !== 0
    ) {
      process.exit(0);
    }
  }

  remove(name) {
    shell.exec(`rm -rf ${name}/.git`);
  }
}

module.exports = GitBuilder;
