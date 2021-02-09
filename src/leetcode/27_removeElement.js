/**
 * https://leetcode.com/problems/remove-element/
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * Time O(n)
 * Need in-place so use splice
 */
var removeElement = function(nums, val) {
  for (var i = 0; i < nums.length; i++) {
    if (val === nums[i]) {
      nums.splice(i, 1);
      i = i - 1;
    }
  }
  return nums.length;
};
console.log(removeElement([1, 1, 1, 2, 3, 3], 1));
