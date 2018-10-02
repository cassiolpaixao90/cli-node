'use strict';

const logger = require('../helpers/logger')
const {
  endProcess
} = require('../helpers/utils')

const shell = require('shelljs')
const erros = require('../helpers/error')

class Npm {

  install() {
    this.nodeVersion();
    shell.echo('Installing package')
    if (shell.exec('npm install').code !== 0) {
      new erros.NpmOrNodeError();
      endProcess();
    }
  }

  nodeVersion() {
    shell.echo('verifying version node')
    const stdout = shell.exec('node --version').stdout
    const version = stdout && parseFloat(stdout.substring(1));
    if (version < 8) {
      logger.error('Unsupported node.js version, make sure you have the latest version installed.');
      endProcess();
    }
    this.npmVersion();
  }

  npmVersion() {
    shell.echo('Verifying version npm')
    const stdout = shell.exec('npm --version').stdout
    if (parseFloat(stdout) < 5) {
      logger.error('You need npm version @>=5')
      endProcess();
    }
  }
}

module.exports = new Npm()
