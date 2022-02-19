const assert = require('chai').assert;
const without = require('../without');

describe('#without', () => {
  it('should return [2, 3] from ([1, 2, 3],[1])', () =>{
    assert.deepEqual(without([1, 2, 3],[1]), [2, 3]);
  });
  it('should return ["1", "2"] from (["1", "2", "3"], [1, 2, "3"])', () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });
  it('should return ["hello", "world"] from (["hello", "world", "lighthouse"], ["lighthouse"])', () => {
    assert.deepEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]), ["hello", "world"]);
  });
  it('should return [1, 2, 3] from ([1, 2, 3], [])', () => {
    assert.deepEqual(without([1, 2, 3], []), [1, 2, 3]);
  });
  it('should not alter the original array passed in from (["hello", "world", "lighthouse"], ["lighthouse"])', () => {
    const words = ["hello", "world", "lighthouse"];
    without(words, ["lighthouse"]);
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });
});



// no need to capture return value for this test case
// Make sure the original array was not altered by the without function
//assertArraysEqual(words, ["hello", "world", "lighthouse"]);