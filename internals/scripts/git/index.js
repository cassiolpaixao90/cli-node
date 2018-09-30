'use strict';

const shell = require('shelljs')

const dir = require('../helpers/dir')
const errors = require('../helpers/error')
const animateProgress = require('../helpers/progress')
// const {
//   getDir
// } = require('../helpers/dir')
// let interval;
// const {
//   endProcess
// } = require('../helpers/utils')


// const verifyProcess = require('../helpers/process')
// let nameProject = "my-app";

// function gitClone(callback) {
//   exec(
//     'git clone https://github.com/cassiolpaixao90/boilerplate-react-redux-pwa.git',
//     verifyProcess.bind(null, callback),
//   );
// }

// const initGit = function (name) {
//   nameProject = name || nameProject;
//   clearInterval(interval);
//   interval = animateProgress('starting new repository');
//   // process.stdout.write('Initialising new repository');
//   gitClone(function () {
//     getDir(nameProject);
//     clearInterval(interval);
//     endProcess();
//   });

// }

// module.exports = {
//   initGit
// }
const Dir = require('../helpers/dir')
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
  }

}

module.exports = new Git();
