'use strict';

const logger = require('./logger')

const endProcess = function () {
  logger.done('\nDone!');
  process.exit(0);
}

module.exports = {
  endProcess
}
