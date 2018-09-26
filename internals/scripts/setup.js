'use strict';

const shell = require('shelljs');
const exec = require('child_process').exec;
// const path = require('path');
// const fs = require('fs'); 
const {
  nodeVersion
} = require('../scripts/nodenpm/index');

const {
  initGit
} = require('./git/index')

// const readline = require('readline'); 

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdout.write('\n');


/**
 * @description Initial setup
 */
const initialSetup = function (nameProject) {
  nodeVersion();
  initGit(nameProject);
}


module.exports = {
  initialSetup
};