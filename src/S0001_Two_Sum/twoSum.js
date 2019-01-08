/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// O(n)
var twoSum = function(nums, target) {
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
