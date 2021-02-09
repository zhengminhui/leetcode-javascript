/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 * [5,4,3,2,0,2] --> true
 * [1,0,1,1] --> true
 * |i - j| <= k
 */
var containsNearbyDuplicate = function(nums, k) {
  if (nums.length <= 1) {
    return false;
  }
  var numsMap = new Map();
  for (var i = 0; i < nums.length; i++) {
    var key = nums[i];
    if (numsMap.has(key) && i - numsMap.get(key) <= k) {
      return true;
    } else {
      numsMap.set(key, i);
    }
  }
  return false;
};
