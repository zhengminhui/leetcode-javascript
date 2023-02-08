/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 排序后，最大-最小 <= 5 才能满足，比如 1，2，3，4，5
// 或者 0，2，3，4，5。
// 如果大于 5，怎么样也凑不成顺子。
// 如果有相同的牌，也不能凑成顺子。
var isStraight = function (nums) {
  // joker pointer
  let j = 0;
  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      // 记录有多少个大小王
      j++;
    } else if (nums[i] === nums[i + 1]) {
      return false;
    }
  }
  // 用joker 做为index，因为排序后0被放到前面了，一个王则最小牌从1号位开始，两个王则从二号位开始
  return nums[4] - nums[j] < 5;
};

// const nums = [1, 2, 3, 4, 6];
const nums = [2, 3, 4, 5, 6];
// const nums = [0, 0, 1, 3, 5];
console.log(isStraight(nums));
