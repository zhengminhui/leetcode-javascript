/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 快排，把数组分成三部分，left 小，index中，right 大
// 发现小的，和left 换位置，index，left 一起加
// 发现中的，index 加
// 发现大的，和right 换位置，right 减
var sortColors = function (nums) {
  let left = 0;
  let index = 0;
  let right = nums.length - 1;

  while (index <= right) {
    const cur = nums[index];

    if (cur === 0) {
      swap(nums, left, index);
      index++;
      left++;
    }
    if (cur === 1) {
      index++;
    }
    if (cur === 2) {
      swap(nums, right, index);
      right--;
    }
  }
};

function swap(nums, a, b) {
  const temp = nums[a];
  nums[a] = nums[b];
  nums[b] = temp;
}
