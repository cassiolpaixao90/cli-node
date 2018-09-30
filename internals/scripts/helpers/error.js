'use strict'

class AppError extends Error {
  constructor(message) {
    super(message)
    Error.captureStackTrace(this, this.constructor)
    this.name = this.constructor.name
    process.exit(0);
  }
}

module.exports.GitError = class extends AppError {
  constructor() {
    super('git errors')
  }
}

module.exports.PathError = class extends AppError {
  constructor() {
    super('path erros')
  }
}
