/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// O(n)
var twoSum = function (nums, target) {
  var map = new Map();
  var res;
  nums.forEach((num, i) => {
    var diff = target - num;
    if (map.has(diff)) {
      var index = map.get(diff);
      res = [index, i];
    }
    map.set(num, i);
  });
  return res;
};

// O(n*2)
var twoSum = function (nums, target) {
  var res = [];
  for (var i = 0; i < nums.length - 1; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[j] === target - nums[i]) {
        res.push(i, j);
        break;
      }
    }
  }
  return res;
};