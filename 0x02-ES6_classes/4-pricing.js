/* eslint-disable no-underscore-dangle */
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(amnt) {
    if (typeof amnt !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = amnt;
  }

  get currency() {
    return this._currency;
  }

  set currency(curr) {
    if (curr instanceof Currency === false) {
      throw new TypeError('Currency must be an instance of Currency class');
    }
    this._currency = curr;
  }

  displayFullPrice() {
    return `${this._amount} ${this.currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return this._amount * conversionRate;
  }
}
