/**
 * @author Cássio Paixão
 */

const GitBuilder = require('../../git');
const DirBuilder = require('../../helpers/dir');
const NpmBuilder = require('../../npm');

class Create {
  constructor() {
    this.gitBuilder = new GitBuilder();
    this.dirBuilder = new DirBuilder();
    this.npmBuilder = new NpmBuilder();
  }

  execute(name) {
    this.gitBuilder.build(name);
    this.dirBuilder.build(name);
    this.npmBuilder.build();
  }
}
module.exports = new Create();
