const shell = require('shelljs');
const editJsonFile = require('./file');

class Dir {
  build(name) {
    this.into(name);
    this.changeValue(name);
  }
}

class DirBuilder extends Dir {
  into(name) {
    shell.cd(`${name}`);
  }

  changeValue(name) {
    const file = editJsonFile('package.json');
    file.set('name', name);
    file.save();
    editJsonFile('package.json', {
      autosave: true
    });
  }
}

module.exports = DirBuilder;
