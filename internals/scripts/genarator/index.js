  const shell = require('shelljs');
  const ServiceBuilder = require('../../templates')

  class Generator {

    getPath(name) {
      const ret = shell.pwd();
      const path = `${ret}\\${name}`
      const dataF = thi.data(name, path)
      generate();
    }

    data(name, path) {
      return {
        name: name,
        path: path
      }
    }

    generate() {
      ServiceBuilder(dataF)
        .withInit()
        .withCreate()
        .withEnd()
        .build();
    }

  }
  module.exports = new Generator();
