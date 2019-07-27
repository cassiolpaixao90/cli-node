/**
 * @author Cássio Paixão
 */
const shell = require('shelljs');

class NPM {
  build() {
    this.nodeVersion();
    this.npmVersion();
    this.install();
  }
}

class NpmBuilder extends NPM {
  nodeVersion() {
    shell.echo('verifying version node...');
    const { stdout } = shell.exec('node --version');
    const version = stdout && parseFloat(stdout.substring(1));
    if (version < 8) {
      process.exit(0);
    }
  }

  npmVersion() {
    shell.echo('Verifying version npm');
    const { stdout } = shell.exec('npm --version');
    if (parseFloat(stdout) < 5) {
      process.exit(0);
    }
  }

  install() {
    shell.echo('Installing package...');
    if (shell.exec('npm install').code !== 0) {
      process.exit(0);
    }
  }
}

module.exports = NpmBuilder;
