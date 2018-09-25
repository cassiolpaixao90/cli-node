#!/usr/bin/env node

'use strict';

const program = require('commander');
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const inquirer = require("inquirer");


clear();
console.log(
  chalk.green(
    figlet.textSync('', {
      horizontalLayout: 'full'
    })
  )
);

program
  .version('0.0.1')
  .description('NodeJS generator');

program
  .command('NodeJS generator')
  .description('start project nodejs + express')
  .action(function () {

  });

process.on('SIGINT', function (exit) {

});

if (!process.argv.slice(2).length || !/[arudl]/.test(process.argv.slice(2))) {
  program.outputHelp();
  process.exit(0);
}

program.parse(process.argv);
