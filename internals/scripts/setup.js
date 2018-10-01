'use strict';


const Git = require('./git')
const Generator = require('./genarator')
// const animateProgress = require('./helpers/progress')

class InitialSetup {

  constructor() {
    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    process.stdout.write('\n');
    this.interval
  }

  init(name) {
    // this.interval = animateProgress('starting configuration...')
    Git.init(name)
    // clearInterval(this.interval)
  }

  generator(name) {
    Generator.getPath(name);
  }
}

module.exports = new InitialSetup();
