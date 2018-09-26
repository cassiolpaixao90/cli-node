const chalk = require('chalk');
const logger = require('./logger')

function verifyProcess(callback) {
  logger.success('');
  if (callback) callback();
}

module.exports = verifyProcess;
