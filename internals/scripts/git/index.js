'use strict';

const shell = require('shelljs')

const errors = require('../helpers/error')
const Dir = require('../helpers/dir')
const npm = require('../nodenpm')
class Git {

  constructor() {
    this.interval;
  }

  init(name) {
    this.name = name || 'my-app'
    shell.echo('starting configuration...')
    this.clone(name);
  }

  clone(name) {
    if (shell.exec('git clone https://github.com/cassiolpaixao90/boilerplate-react-redux-pwa.git').code !== 0) {
      new errors.GitError()
    }

    Dir.renamePath(name)
    npm.install();
  }

}

module.exports = new Git();
