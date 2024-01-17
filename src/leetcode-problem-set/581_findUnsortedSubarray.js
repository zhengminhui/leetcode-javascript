/**
 * @param {number[]} nums
 * @return {number}
 */
// 方法 1：time O(nlogn), space O(n);
// 先检查原数组是否是升序，如果是直接返回 0；
// 排序后，双指针比较，相同，则往中间逼近，返回 right-left + 1 长度。
var findUnsortedSubarray = function (nums) {
  if (isSorted(nums)) return 0;
  const sorted = nums.slice().sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;
  while (nums[left] === sorted[left]) {
    left++;
  }
  while (nums[right] === sorted[right]) {
    right--;
  }
  return right - left + 1;
};

function isSorted(nums) {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      return false;
    }
  }
  return true;
}
