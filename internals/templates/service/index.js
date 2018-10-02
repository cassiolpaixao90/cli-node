//https: //thisdavej.com/learn-handlebars-with-node-js-and-help-freddys-fish/#custom-helper-to-provide-conditional-formatting
const fs = require('fs');
const shelljs = require('shelljs')
const handlebars = require('handlebars')

const baseBuilder = require('../../pattern/base-builder')

class ServiceBuilder extends baseBuilder {

  constructor(data) {
    super();
    this.data = data;
    this.create = this.createModule();
    this.controller = this.moduleController();
    this.test = this.moduleTest();
    this.repository = this.moduleRepository();
    this.service = this.moduleService();
    super.init();
  }

  createModule() {
    shelljs.mkdir('-p', this.data.path, this.data.name);
  }

  moduleController() {
    const inFileController = __dirname + '\\controller.hbs';
    const outFileController = this.data.path + '\\controller.js';
    this.generateFile(inFileController, outFileController);
  }

  moduleTest() {

    const inFileTest = __dirname + '\\test.hbs'
    const outFileTest = this.data.path + '\\test.js';
    this.generateFile(inFileTest, outFileTest);
  }

  moduleRepository() {
    const inFileRepository = __dirname + '\\repository.hbs'
    const outFileRepository = this.data.path + '\\repository.js';
    this.generateFile(inFileRepository, outFileRepository);
  }

  moduleService() {
    const inFileService = __dirname + '\\service.hbs'
    const outFileService = this.data.path + '\\service.js';
    this.generateFile(inFileService, outFileService);
  }

  generateFile(inFile, outFile) {
    const source = fs.readFileSync(inFile, 'utf8');
    const template = handlebars.compile(source, {
      strict: true
    });
    const result = template({
      name: this.data.name
    });
    fs.writeFileSync(outFile, result);
  }
}

module.exports = function serviceBuilder(data) {
  return new ServiceBuilder(data);
};
