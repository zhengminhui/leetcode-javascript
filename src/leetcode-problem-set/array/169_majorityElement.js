/**
 * @param {number[]} nums
 * @return {number}
 */
// time O(n), space O(1)
// 一个变量记录 major，一个计数，因为一定存在多数元素，所以遇则加，非则减，最后就能筛除最多的。
// 注意 count 为 0 时，需要替换 major 并且将 count 重新声明为 1
var majorityElement = function (nums) {
  let major = nums[0];
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === major) {
      count++;
    } else {
      count--;
    }
    if (count === 0) {
      major = nums[i];
      count = 1;
    }
  }
  return major;
};
