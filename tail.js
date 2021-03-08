const tail = function(array) {
  const updatedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i !== 0) {
      updatedArray.push(array[i]);
    }
  }
  return updatedArray;
};

module.exports = tail;