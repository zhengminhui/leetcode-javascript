/**
 * https://leetcode.com/problems/contains-duplicate/
 * @param {number[]} nums
 * @return {boolean}
 * Time Complextity O(n)
 * if nums[i] was not in dict, set its value as 1, else +1.
 * beware of the order of ||. a||b will always equal to a if a is not 0/null/NaN.
 */
var containsDuplicate = function(nums) {
  if (nums.length <= 1) {
    return false;
  }
  var numsMap = new Map();
  for (var i = 0; i < nums.length; i++) {
    if (numsMap.has(nums[i])) {
      return true;
    } else {
      numsMap.set(nums[i], 1);
    }
  }
  return false;
};
