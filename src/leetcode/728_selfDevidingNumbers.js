/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  var res = [];
  for (var i = left; i <= right; i++) {
    var num = i;
    if (isSelfDeviding(num)) {
      res.push(num);
    }
  }
  return res;
};

var isSelfDeviding = function (num) {
  var copy = num;
  while (copy !== 0) {
    var remain = copy % 10;
    var devisor = Math.floor(copy / 10);
    if (remain === 0 || num % remain !== 0) {
      return false;
    }
    copy = devisor;
  }
  return true;
};
