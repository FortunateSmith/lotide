
const middle = function(array) {
  let midElem = [];
  //condition for arrays greater than two that are of odd length
  if (array.length > 2 && array.length % 2 === 1) {
    midElem.push(array[(array.length - 1) / 2]);
    //condition for arrays greater than two of even length
  } else if (array.length > 2 && array.length % 2 === 0) {
    midElem.push(array[(array.length / 2) - 1]);
    midElem.push(array[array.length / 2]);
  } else {
    return undefined;
  }
  return midElem;
};

module.exports = middle;

