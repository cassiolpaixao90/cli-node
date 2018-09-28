#!/usr/bin/env node

'use strict';

const program = require('commander');
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const {
  initialSetup
} = require('../internals/scripts/setup')
const {
  prompt
} = require('inquirer');

// const {
//   generate
// } = require('../internals/scripts/genarator/index')

const shell = require('shelljs');

clear();
console.log(
  chalk.green(
    figlet.textSync('NodeJS Generator <3', {
      horizontalLayout: 'full'
    })
  )
);

program
  .description('start project nodejs + express')

const questions = [{
  type: 'input',
  name: 'name',
  message: 'Enter name project: '
}];

program
  .command('create')
  .alias('c')
  .description('Create Project')
  .action(() => {
    prompt(questions).then((answers) => {
      initialSetup(answers.name.toString());
    });
  });

program
  .command('generate')
  .alias('g')
  .description('Generate Service')
  .action(() => {
    // generate();
    shell.echo('generator...')
    shell.exit(1);
  });

process.on('SIGINT', function (exit) {

});


if (!process.argv.slice(2).length || !/[arudl]/.test(process.argv.slice(2))) {
  program.outputHelp();
  process.exit();
}
program.parse(process.argv)
