 const shell = require('shelljs');

 shell.echo('geerando...')
 shell.exit(0);

 // const fs = require('fs');
 // const path = require('path');
 // const {
 //   exec
 // } = require('child_process');
 // const serviceGenerator = require('./service/index.js');
 // module.exports = plop => {
 //   plop.setGenerator('service', componentGenerator);
 //   plop.addHelper('directory', comp => {
 //     try {
 //       fs.accessSync(
 //         path.join(__dirname, `../../app/containers/${comp}`),
 //         fs.F_OK,
 //       );
 //       return `containers/${comp}`;
 //     } catch (e) {
 //       return `components/${comp}`;
 //     }
 //   });
 //   plop.addHelper('curly', (object, open) => (open ? '{' : '}'));
 //   plop.setActionType('prettify', (answers, config) => {
 //     const folderPath = `${path.join(
 //       __dirname,
 //       '/../../app/',
 //       config.path,
 //       plop.getHelper('properCase')(answers.name),
 //       '**.js',
 //     )}`;
 //     exec(`npm run prettify -- "${folderPath}"`);
 //     return folderPath;
 //   });
 // };
