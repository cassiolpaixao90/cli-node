'use strict';
const exec = require('child_process').exec;
const animateProgress = require('../helpers/progress')
let interval;
const {
  endProcess
} = require('../helpers/utils')

const verifyProcess = require('../helpers/process')

function gitClone(callback) {
  exec(
    'git clone https://github.com/cassiolpaixao90/boilerplate-react-redux-pwa.git',
    verifyProcess.bind(null, callback),
  );
}

const initGit = function () {
  clearInterval(interval);
  interval = animateProgress('Initialising new repository');
  process.stdout.write('Initialising new repository');
  gitClone(function () {
    clearInterval(interval);
    endProcess();
  });

}

module.exports = {
  initGit
}
