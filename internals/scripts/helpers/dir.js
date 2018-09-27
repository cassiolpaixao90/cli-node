'use strict';

const shell = require('shelljs');
const editJsonFile = require('./file');
const {
  install
} = require('../nodenpm/index');

const getDir = function (nameProject) {
  shell.cp('-R', 'boilerplate-react-redux-pwa/', `${nameProject}`);
  shell.rm('-rf', 'boilerplate-react-redux-pwa');
  shell.cd(`${nameProject}`);
  changeValuePackage(nameProject);
}

function changeValuePackage(name) {

  let file = editJsonFile('package.json');
  file.set('name', name);
  file.save();
  editJsonFile('package.json', {
    autosave: true
  });

}

module.exports = {
  getDir
}
