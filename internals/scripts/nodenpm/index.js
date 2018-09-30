'use strict';

const logger = require('../helpers/logger')
const {
  endProcess
} = require('../helpers/utils')

const shell = require('shelljs')
const erros = require('../helpers/error')

// function npmVersion() {
//   exec('npm -v', function (err, stdout, stderr) {
//     if (parseFloat(stdout) < 5 || err) {
//       logger.error(err || 'You need npm version @>=5')
//       endProcess();
//     }
//   });
// }

// const nodeVersion = function () {
//   exec('node --version', function (err, stdout, stderr) {
//     const version = stdout && parseFloat(stdout.substring(1));
//     if (version < 8 || err) {
//       logger.error(err || 'Unsupported node.js version, make sure you have the latest version installed.');
//       endProcess();
//     }
//   });
//   npmVersion();
// }

// const install = function () {
//   console.log('Install dependencies');
//   exec('npm install', function (code, stdout, stderr) {
//     console.log("Dependencies installed!");
//   });
// }
// module.exports = {
//   nodeVersion,
//   install
// };

class Npm {

  install() {
    shell.echo('Installing package')
    if (shell.exec('npm install').code !== 0) {
      new erros.NpmOrNodeError();
    }
  }

  nodeVersion() {
    shell.echo('verifying version node')
    const stdout = shell.exec('node --version').stdout
    const version = stdout && parseFloat(stdout.substring(1));
    if (version < 8 || err) {
      logger.error(err || 'Unsupported node.js version, make sure you have the latest version installed.');
      endProcess();
    }
  }

  npmVersion() {
    shell.echo('Verifying version npm')
    const stdout = shell.exec('npm --version').stdout
    if (parseFloat(stdout) < 5 || err) {
      logger.error(err || 'You need npm version @>=5')
      endProcess();
    }

  }

}

module.exports = new Npm()
