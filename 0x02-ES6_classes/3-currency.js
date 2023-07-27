/* eslint-disable no-underscore-dangle */
export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  set name(val) {
    if (typeof val !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = val;
  }

  get name() {
    return this._name;
  }

  set code(val) {
    if (typeof val !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = val;
  }

  get code() {
    return this._code;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
