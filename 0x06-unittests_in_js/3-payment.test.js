// test for 3-payment.js

const { describe, it } = require('mocha');
const sinon = require('sinon');
const expect = require('chai');
const Utils = require('./utils');
const paymentModule = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('validate usage of Utils.utils', () => {
    const spy = sinon.spy(Utils, 'utils');
    paymentModule.sendPaymentRequestToApi(100, 20);
    expect(spy.calledWith('SUM', 100, 20));
    spy.restore();
  });
});
