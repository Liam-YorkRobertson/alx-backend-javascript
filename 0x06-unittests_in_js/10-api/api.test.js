// test for api.js

const { describe, it } = require('mocha');
const { expect } = require('chai');
const request = require('request');

const apiUrl = 'http://localhost:7865';

describe('index page', () => {
  it('Check correct status code', (done) => {
    request(apiUrl, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('Check correct result', (done) => {
    request(apiUrl, (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('Check content type is text/html', (done) => {
    request(apiUrl, (err, res, body) => {
      expect(res.headers['content-type']).to.equal('text/html; charset=utf-8');
      done();
    });
  });

  it('check correct status code when :id is a number', (done) => {
    request(`${apiUrl}/cart/12`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('check correct status code (404) when id is not a number', (done) => {
    request(`${apiUrl}/cart/hello`, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

  it('check post /login returns correct message', (done) => {
    request.post(`${apiUrl}/login`, { json: { userName: 'Pinkbrook' } }, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Pinkbrook');
      done();
    });
  });

  it('check get /available_payments returns valid response', (done) => {
    request.get(`${apiUrl}/available_payments`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(JSON.parse(body)).to.deep.equal({
        payment_methods:
        { credit_cards: true, paypal: false },
      });
      done();
    });
  });
});
