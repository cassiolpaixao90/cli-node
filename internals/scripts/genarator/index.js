  const shell = require('shelljs');

  const generate = function () {
    if (shell.exec('plop internals/generators/index.js').code !== 0) {
      shell.echo("Error: Failed")
      shell.exit(1)
    }
  }

  module.exports = {
    generate
  }
