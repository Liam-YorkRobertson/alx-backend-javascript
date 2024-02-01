// test for 5-payment.js

const { describe, it } = require('mocha');
const sinon = require('sinon');
const { expect } = require('chai');
const paymentModule = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let logSpy;
  beforeEach(() => {
    logSpy = sinon.spy(console, 'log');
  });
  afterEach(() => {
    logSpy.restore();
  });
  it('should log 120', () => {
    paymentModule.sendPaymentRequestToApi(100, 20);
    expect(logSpy.calledWith('The total is: 120')).to.be.true;
    expect(logSpy.callCount).to.equal(1);
  });
  it('should log 20', () => {
    paymentModule.sendPaymentRequestToApi(10, 10);
    expect(logSpy.calledWith('The total is: 20')).to.be.true;
    expect(logSpy.callCount).to.equal(1);
  });
});
