/**
 * @param {number[]} nums
 * @return {number}
 */
const findRepeatNumber = function (nums) {
  const dict = {};

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (dict[element] !== undefined) {
      return element;
    } else {
      dict[element] = element;
    }
  }
};

const nums = [0, 1, 0];
console.log(findRepeatNumber(nums));
