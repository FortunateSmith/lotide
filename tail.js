// create new array with all elements but first from given array
const tail = function(array) {

  let newArr = [];
  if (array !== []) {
    newArr = array.slice(1);
  } else {
  // assigns the tail (everything but the head) to new array
    return newArr = undefined;
  }
  return newArr;
};

module.exports = tail;