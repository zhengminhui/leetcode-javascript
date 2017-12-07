/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
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