//https: //thisdavej.com/learn-handlebars-with-node-js-and-help-freddys-fish/#custom-helper-to-provide-conditional-formatting
const fs = require('fs');
const handlebars = require('handlebars');

const inFile = './controller.hbs';
const outFile = './controller.js';

const data = require('./site.json');

const source = fs.readFileSync(inFile, 'utf8');
const template = handlebars.compile(source, {
  strict: true
});
const result = template(data);

console.log(result);

fs.writeFileSync(outFile, result);
console.log(`File written to ${outFile}`);
