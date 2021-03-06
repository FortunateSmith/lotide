const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
  it('should return 3 for [7, 3 ,9]', () => {
    assert.deepEqual(middle([7, 3 ,9]),[3]);
  });
  it('should return [2, 3 ] for [1, 2, 3, 4]', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it('should return [] for [1, 2]', () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it('should return [] for []', () => {
    assert.deepEqual(middle([]), []);
  });
  it('should return ["orange", "yellow"] for ["red", "orange", "yellow", "green"]',() => {
    assert.deepEqual(middle(["red", "orange", "yellow", "green"]), ["orange", "yellow"]);
  });
});



