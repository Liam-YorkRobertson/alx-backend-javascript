// tests for 0-calcul.js

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should round a and b and return the sum', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should handle negative numbers', () => {
    assert.strictEqual(calculateNumber(-1, -3.7), -5);
    assert.strictEqual(calculateNumber(-1.4, -3.7), -5);
  });

  it('should handle zero values', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
    assert.strictEqual(calculateNumber(0, 3.7), 4);
    assert.strictEqual(calculateNumber(1.2, 0), 1);
    assert.strictEqual(calculateNumber(0, -3.7), -4);
  });

  it('should handle large numbers', () => {
    assert.strictEqual(calculateNumber(1000000000, 3000000000.7), 4000000001);
    assert.strictEqual(calculateNumber(999999999.9, -3000000000.1), -2000000000);
  });

  it('should handle decimal rounding', () => {
    assert.strictEqual(calculateNumber(2.1, 3.5), 6);
    assert.strictEqual(calculateNumber(2.4, 3.5), 6);
  });
});
