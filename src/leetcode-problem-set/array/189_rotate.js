/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 一把梭，能过。
var rotate = function (nums, k) {
  let tmp;
  while (k) {
    tmp = nums.pop();
    nums.unshift(tmp);
    k--;
  }
};
