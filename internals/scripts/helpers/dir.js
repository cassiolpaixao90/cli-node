'use strict';

const shell = require('shelljs');
const editJsonFile = require('./file');
class Dir {

  renamePath(name) {
    shell.cp('-R', 'boilerplate-react-redux-pwa/', `${name}`);
    shell.rm('-rf', 'boilerplate-react-redux-pwa');
    shell.cd(`${name}`);
    this.changeValueFile(name);
  }

  changeValueFile(name) {
    let file = editJsonFile('package.json');
    file.set('name', name);
    file.save();
    editJsonFile('package.json', {
      autosave: true
    });
  }
}

module.exports = new Dir()
