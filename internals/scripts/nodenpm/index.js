'use strict';

const exec = require('child_process').exec;
const logger = require('../helpers/logger');
const {
  endProcess
} = require('../helpers/utils');

function npmVersion() {
  exec('npm -v', function (err, stdout, stderr) {
    if (parseFloat(stdout) < 5 || err) {
      logger.error(err || 'You need npm version @>=5')
      endProcess();
    }
  });
}

const nodeVersion = function () {
  exec('node --version', function (err, stdout, stderr) {
    const version = stdout && parseFloat(stdout.substring(1));
    if (version < 8 || err) {
      logger.error(err || 'Unsupported node.js version, make sure you have the latest version installed.');
      endProcess();
    }
  });
  npmVersion();
}

module.exports = {
  nodeVersion
};
