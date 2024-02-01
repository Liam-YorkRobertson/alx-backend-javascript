// test for 6-payment_token.js

const { describe, it } = require('mocha');
const { expect } = require('chai');
const { getPaymentTokenFromAPI } = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('async testing with done', (done) => {
    (async () => {
      const data = await getPaymentTokenFromAPI(true);
      expect(data).to.have.property('data');
      done();
    })();
  });
});
