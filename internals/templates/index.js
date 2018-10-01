//https: //thisdavej.com/learn-handlebars-with-node-js-and-help-freddys-fish/#custom-helper-to-provide-conditional-formatting
const fs = require('fs');
const handlebars = require('handlebars');

const inFileController = './controller.hbs';
const outFileController = './controller.js';


const source = fs.readFileSync(inFileController, 'utf8');
const template = handlebars.compile(source, {
  strict: true
});
const result = template({
  data
});

console.log(result);

fs.writeFileSync(outFile, result);
console.log(`File written to ${outFile}`);

const baseBuilder = require('../pattern/base-builder')
class Service extends baseBuilder {

  moduleController() {
    const inFileController = './controller.hbs';
    const outFileController = './controller.js';
  }

  moduleTest() {
    const inFileTest = './test.hbs';
    const outFileTest = './test.js';
  }

  moduleRepository() {
    const inFileRepository = './repository.hbs';
    const outFileRepository = './repository.js';
  }

  moduleService() {
    const inFileService = './service.hbs';
    const outFileService = './service.js';
  }
}
module.exports = new Service()
