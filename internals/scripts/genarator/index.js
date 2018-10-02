  const shell = require('shelljs');
  const serviceBuilder = require('../../templates/service')

  class Generator {

    getPath(name) {
      const ret = shell.pwd();
      const path = `${ret}\\${name}`
      const dataF = this.data(name, path)
      this.generate(dataF);
    }

    data(name, path) {
      return {
        name: name,
        path: path
      }
    }

    generate(dataF) {
      serviceBuilder(dataF)
        .withController()
        .withTest()
        .withRepository()
        .withService()
        .build();
    }

  }
  module.exports = new Generator();
