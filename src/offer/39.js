/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  return nums.sort()[Math.floor(nums.length / 2)];
};

const nums = [1, 2, 2, 2, 2, 2, 3, 4, 5];
// const nums = [1];
console.log(majorityElement(nums));
