// tests for 1-calcul.js

const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('should perform SUM operation', () => {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
  });

  it('should perform SUBTRACT operation', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    assert.strictEqual(calculateNumber('SUBTRACT', 5, 2.5), 2);
  });

  it('should perform DIVIDE operation', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    assert.strictEqual(calculateNumber('DIVIDE', 10, 2), 5);
  });

  it('should handle DIVIDE operation with zero divisor', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    assert.strictEqual(calculateNumber('DIVIDE', 10, 0), 'Error');
  });
});
