'use strict';

const chalk = require('chalk');

const logger = {

  error: err => {
    process.stdout.write(`${chalk.red(`✘ ${err}`)} `);
  },
  success: success => {
    process.stdout.write(`${chalk.green('✓')} ${success}`);
  },
  done: done => {
    process.stdout.write(`${chalk.green(`${done}`)}`);
  }
}

module.exports = logger;
