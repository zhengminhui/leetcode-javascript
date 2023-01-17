/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    if (map[cur]) {
      return cur;
    }
    map[cur] = true;
  }

  return -1;
};

const nums = [0, 1, 0];
console.log(findRepeatNumber(nums));
