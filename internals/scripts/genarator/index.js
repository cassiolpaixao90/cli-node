  const shell = require('shelljs');


  const generate = function () {
    if (shell.exec('plop internals/templates/index.js').code !== 0) {
      shell.echo("Error: Failed")
      shell.exit(1)
    }
  }

  module.exports = {
    generate
  }


  class Generator {

    getPath(name) {
      const ret = shell.pwd();
      const path = `${ret}\\${name}`
      const dataF = this.data(name, path)

    }

    data(name, path) {
      return {
        name: name,
        path: path
      }
    }


  }
  module.exports = new Generator();
