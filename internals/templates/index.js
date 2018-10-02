//https: //thisdavej.com/learn-handlebars-with-node-js-and-help-freddys-fish/#custom-helper-to-provide-conditional-formatting
const fs = require('fs');
const handlebars = require('handlebars');
const baseBuilder = require('../pattern/base-builder')

class Service extends baseBuilder {

  constructor(data) {
    super();
    this.init = this.moduleController(data);
    this.create = this.moduleTest(data);
    this.generator = this.moduleRepository(data);
    this.end = this.moduleService(data);
    super.init();
  }

  moduleController(data) {
    const inFileController = './controller.hbs';
    const outFileController = './controller.js';
    this.generateFile();
  }

  moduleTest(data) {
    const inFileTest = './test.hbs';
    const outFileTest = './test.js';
    this.generateFile();
  }

  moduleRepository(data) {
    const inFileRepository = './repository.hbs';
    const outFileRepository = './repository.js';
    this.generateFile();
  }

  moduleService(data) {
    const inFileService = './service.hbs';
    const outFileService = './service.js';
    this.generateFile();
  }

  generateFile(inFile, outFile, data) {
    const source = fs.readFileSync(inFile, 'utf8');
    const template = handlebars.compile(source, {
      strict: true
    });
    const result = template({
      data
    });
    fs.writeFileSync(outFile, result);
  }
}
module.exports = new Service(data);
