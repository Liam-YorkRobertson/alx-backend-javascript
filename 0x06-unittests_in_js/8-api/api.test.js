// test for api.js

const { describe, it } = require('mocha');
const { expect } = require('chai');
const request = require('request');

const apiUrl = 'http://localhost:7865';

describe('Index page', () => {
  it('Correct status code?', (done) => {
    request(apiUrl, (err, res, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
  it('Correct result?', (done) => {
    request(apiUrl, (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
  it('Content type is text/html?', (done) => {
    request(apiUrl, (err, res, body) => {
      expect(response.headers['content-type']).to.equal('text/html; charset=utf-8');
      done();
    });
  });
});
