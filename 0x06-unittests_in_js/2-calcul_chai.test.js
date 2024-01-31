// tests for 2-calcul_chai.js

const chai = require('chai');

const { expect } = chai;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  it('should perform SUM operation', () => {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
  });

  it('should perform SUBTRACT operation', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    expect(calculateNumber('SUBTRACT', 5, 2.5)).to.equal(2);
  });

  it('should perform DIVIDE operation', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    expect(calculateNumber('DIVIDE', 10, 2)).to.equal(5);
  });

  it('should handle DIVIDE operation with zero divisor', () => {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    expect(calculateNumber('DIVIDE', 10, 0)).to.equal('Error');
  });
});
