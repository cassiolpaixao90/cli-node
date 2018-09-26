'use strict';

const exec = require('child_process').exec;
const shell = require('shelljs');

const getDir = function (nameProject) {
  setTimeout(() => {
    shell.cp('-R', 'boilerplate-react-redux-pwa/', `${nameProject}`);
    shell.rm('-rf', 'boilerplate-react-redux-pwa');
  }, 1000)
}

module.exports = {
  getDir
}
