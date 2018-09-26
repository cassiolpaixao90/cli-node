'use strict';

const exec = require('child_process').exec;
const shell = require('shelljs');

const getDir = function (nameProject) {
  shell.cp('-R', 'boilerplate-react-redux-pwa/', `${nameProject}`);
  shell.rm('-rf', 'boilerplate-react-redux-pwa');
}

module.exports = {
  getDir
}
