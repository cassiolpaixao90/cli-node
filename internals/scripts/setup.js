'use strict';

const shell = require('shelljs');
const exec = require('child_process').exec;
// const path = require('path');
// const fs = require('fs');
// const animateProgress = require('./helpers/progress');
// const addCheckMark = require('./helpe'rs/checkmark');
// const xmark = require('./helpers/xmark');
const {
  nodeVersion
} = require('../scripts/nodenpm/index');
// const readline = require('readline');

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdout.write('\n');
let interval;
let clearRepo = true;

/**
 * @description Initial setup
 */
const initialSetup = function () {
  nodeVersion();
}

/**
 * @description verify node version
 */
function initNPMVersion() {
  exec('node --version', function (err, stdout, stderr) {
    const nodeVersion = stdout && parseFloat(stdout.substring(1));
    if (nodeVersion < 5 || err) {
      installDepsCallback(err || 'Unsupported node.js version, make sure you have the latest version installed.', );
    } else {
      console.log("initGit");
    }
  });
}

/**
 * Callback function after installing dependencies
 */
// function installDepsCallback(error) {
//   clearInterval(interval);
//   xmark(error);
//   endProcess();
// }

// function endProcess() {
//   process.stdout.write('\nDone!');
//   process.exit(0);
// }

module.exports = {
  initialSetup
};
