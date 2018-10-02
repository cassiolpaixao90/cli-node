//https: //thisdavej.com/learn-handlebars-with-node-js-and-help-freddys-fish/#custom-helper-to-provide-conditional-formatting
const fs = require('fs');
const handlebars = require('handlebars');
const baseBuilder = require('../pattern/base-builder')

const controler = require('../templates/service/controller.hbs')

class ServiceBuilder extends baseBuilder {

  constructor(data) {
    super();
    this.data = data;
    console.log("this.data", this.data);
    this.controller = this.moduleController();
    this.test = this.moduleTest();
    this.repository = this.moduleRepository();
    this.service = this.moduleService();
    super.init();
  }

  moduleController() {
    const inFileController = './controller.hbs';
    const outFileController = './controller.js';
    this.generateFile(inFileController, outFileController);
  }

  moduleTest() {
    const inFileTest = './test.hbs';
    const outFileTest = './test.js';
    this.generateFile(inFileTest, outFileTest);
  }

  moduleRepository() {
    const inFileRepository = './repository.hbs';
    const outFileRepository = './repository.js';
    this.generateFile(inFileRepository, outFileRepository);
  }

  moduleService() {
    const inFileService = './service.hbs';
    const outFileService = './service.js';
    this.generateFile(inFileService, outFileService);
  }

  generateFile(inFile, outFile) {
    const source = fs.readFileSync(inFile, 'utf8');
    const template = handlebars.compile(source, {
      strict: true
    });
    const data = this.data
    const result = template({
      data
    });
    fs.writeFileSync(outFile, result);
  }
}

module.exports = function serviceBuilder(data) {
  return new ServiceBuilder(data);
};
