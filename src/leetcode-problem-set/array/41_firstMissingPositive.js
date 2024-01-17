/**
 * @param {number[]} nums
 * @return {number}
 */
// time O(n) space O(k)
// 第一遍遍历的目的，筛选出值得swap排序的数字，两个条件，大于 0 and 小于等于数组长度，
// 比如[1,2,-1]中的 -1, 和 [1,2,8] 中的 8，就没必要管
// 满足条件的数字，同时它还不在自己的位子的，
// 比如 [3,4,-1,1]中的 3，当 i=0， nums[0] = 3, nums[nums[0]-1]= -1,
// 而他应该在 index=2的位置。
// 简单来说，就是把数字n丢到 nums[n-1] 位置去
var firstMissingPositive = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    while (
      nums[i] > 0 &&
      nums[i] <= nums.length &&
      nums[i] !== nums[nums[i] - 1]
    ) {
      swap(nums, i, nums[i] - 1);
    }
  }
  for (let i = 0; i < nums.length; i++) {
    // 循环交换位置之后的数组，判断第一个缺失的正数
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }
  return nums.length + 1;
};

function swap(nums, a, b) {
  const tmp = nums[a];
  nums[a] = nums[b];
  nums[b] = tmp;
}

const nums = [3, 4, -1, 1];
// const nums = [7, 8, 9, 11, 12];
// const nums = [1];
console.log(firstMissingPositive(nums));
