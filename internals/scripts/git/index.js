'use strict';
const exec = require('child_process').exec;
const animateProgress = require('../helpers/progress');
const shell = require('shelljs');
const {
  getDir
} = require('../helpers/dir')
let interval;
const {
  endProcess
} = require('../helpers/utils')

const verifyProcess = require('../helpers/process')
let nameProject = "my-app";

function gitClone(callback) {
  exec(
    'git clone https://github.com/cassiolpaixao90/boilerplate-react-redux-pwa.git',
    verifyProcess.bind(null, callback),
  );

  getDir(nameProject);
  // shell.cp('-R', 'boilerplate-react-redux-pwa/', `${nameProject}`);
  // shell.rm('-rf', 'boilerplate-react-redux-pwa');
}

const initGit = function (name) {
  nameProject = name || nameProject;
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
