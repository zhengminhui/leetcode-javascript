/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let k = 0;

  return true;
};

// const nums = [1, 2, 3, 4, 6];
// const nums = [2, 3, 4, 5, 6];
const nums = [0, 0, 1, 3, 5];
console.log(isStraight(nums));
