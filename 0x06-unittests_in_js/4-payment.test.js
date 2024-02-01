// test for 4-payment.js

const { describe, it } = require('mocha');
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const paymentModule = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('stub to return 10 for calculateNumber', () => {
    const calcStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const logSpy = sinon.spy(console, 'log');
    paymentModule.sendPaymentRequestToApi(100, 20);
    expect(calcStub.calledWith('SUM', 100, 20)).to.be.true;
    expect(logSpy.calledWith('The total is: 10')).to.be.true;
    calcStub.restore();
    logSpy.restore();
  });
});
