  const shell = require('shelljs');
  const Service = require('../../templates')

  class Generator {

    getPath(name) {
      const ret = shell.pwd();
      const path = `${ret}\\${name}`
      const dataF = thi.data(name, path)
      Service(dataF)
    }

    data(name, path) {
      return {
        name: name,
        path: path
      }
    }


  }
  module.exports = new Generator();
