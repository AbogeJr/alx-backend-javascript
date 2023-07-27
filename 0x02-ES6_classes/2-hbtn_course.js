/* eslint-disable no-underscore-dangle */
export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
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

  set length(len) {
    if (typeof len !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = len;
  }

  get length() {
    return this._length;
  }

  set students(value) {
    if (value instanceof Array !== true) {
      throw new TypeError('Students must be an Array');
    }
    this._students = value;
  }

  get students() {
    return this._students;
  }
}
