/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  var storeArray = [];
  while (n !== 1) {
    if (storeArray.indexOf(n) > -1) {
      return false;
    } else {
      storeArray.push(n);
    }
    n = squareAdd(n)
  }
  return true;
};

var squareAdd = function (n) {
  var sum = 0;
  while (n !== 0) {
    var remain = n % 10;
    n = Math.floor(n / 10);
    sum += Math.pow(remain, 2);
  }
  return sum;
};
