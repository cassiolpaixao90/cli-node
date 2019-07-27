/**
 * @author Cássio Paixão
 */

class Conductor {
  run(command) {
    command.execute();
  }
}

module.exports = new Conductor();
