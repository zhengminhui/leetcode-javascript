/**
 * @param {number[]} nums
 * @return {boolean}
 * 判断是否是个5连顺子，排序之后，max-min < 5
 */
var isStraight = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let joker = 0;
  for (let i = 0; i < 4; i++) {
    if (nums[i] === 0) {
      joker++;
    } else if (nums[i] === nums[i + 1]) {
      // 有牌重复
      return false;
    }
  }
  // 用joker 做为index，因为排序后0被放到前面了，一个王则最小牌从1号位开始，两个王则从二号位开始
  return nums[4] - nums[joker] < 5;
};

// const nums = [1, 2, 3, 4, 6];
const nums = [2, 3, 4, 5, 6];
// const nums = [0, 0, 1, 3, 5];
console.log(isStraight(nums));
