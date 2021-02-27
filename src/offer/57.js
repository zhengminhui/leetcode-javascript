/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let i = 0;
  let j = nums.length - 1;
  while (i < j) {
    const sum = nums[i] + nums[j];
    if (target > sum) {
      i += 1;
    } else if (target < sum) {
      j -= 1;
    } else {
      return [nums[i], nums[j]];
    }
  }
  return [];
};

const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target));
