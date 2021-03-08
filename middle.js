const middle = function(array) {  
  if (array.length <= 2) {
    return [];
  } 
  if (array.length % 2 === 0 ) {
    return array.slice(Math.floor((array.length - 1) / 2), Math.floor(((array.length) / 2)) + 1);
  } else {
    return array[(array.length - 1) / 2]
  }
};
module.exports = middle;


