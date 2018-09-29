'use strict'

class BaseBuilder {
  init() {
    Object.keys(this).forEach((key) => {
      const witherName = `with${key.substring(0,1).toUpperCase()}${key.substring(1)}`;
      this[witherName] = (value) => {
        this[key] = value;
        return this;
      };
    });
  }

  build() {
    const keysNoWithers = Object.keys(this).filter((key) => (
      typeof this[key] === 'function'
    ));

    return keysNoWithers.reduce((returnValue, key) => {
      return {
        ...returnValue,
        [key]: this[key]
      };
    }, {});
  }
}

module.exports = BaseBuilder;
