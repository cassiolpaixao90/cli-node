'use strict';
const exec = require('child_process').exec;

const logger = require('./logger')

function verifyProcess(callback) {
  logger.success('');
  if (callback) callback();
}


module.exports = verifyProcess;
