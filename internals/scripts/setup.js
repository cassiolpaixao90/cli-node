'use strict';


const Git = require('./git')
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
}

module.exports = new InitialSetup();
