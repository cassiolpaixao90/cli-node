/* eslint-disable no-multi-assign */
const findValue = require('find-value');
const setValue = require('set-value');
const rJson = require('r-json');
const fs = require('fs');
const iterateObject = require('iterate-object');

class EditJsonFile {
  constructor(path, options) {
    this.options = options = options || {};
    options.stringifyWidth = options.stringifyWidth || 2;
    options.stringifyFn = options.stringifyFn || null;
    this.path = path;
    this.data = this.read();
  }

  set(path, value) {
    if (typeof path === 'object') {
      iterateObject(path, (val, n) => {
        setValue(this.data, n, val);
      });
    } else {
      setValue(this.data, path, value);
    }
    if (this.options.autosave) {
      this.save();
    }
    return this;
  }

  get(path) {
    if (path) {
      return findValue(this.data, path);
    }
    return this.toObject();
  }

  unset(path) {
    return this.set(path, undefined);
  }

  read(cb) {
    if (!cb) {
      try {
        return rJson(this.path);
      } catch (e) {
        return {};
      }
    }
    rJson(this.path, (err, data) => {
      data = err ? {} : data;
      cb(null, data);
    });
  }

  write(content, cb) {
    if (cb) {
      fs.writeFile(this.path, content, cb);
    } else {
      fs.writeFileSync(this.path, content);
    }
    return this;
  }

  save(cb) {
    this.write(
      JSON.stringify(
        this.data,
        this.options.stringifyFn,
        this.options.stringifyWidth
      ),
      cb
    );
    return this;
  }

  toObject() {
    return this.data;
  }
}

module.exports = function editJsonFile(path, options) {
  return new EditJsonFile(path, options);
};
