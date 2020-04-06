/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const res = [];
  const len = nums.length;
  const target = 0;
  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < len - 2; i++) {
    if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      let j = i + 1;
      let k = len - 1;

      while (j < k) {
        const sum = nums[i] + nums[j] + nums[k];
        if (sum === target) {
          res.push([nums[i], nums[j], nums[k]]);
          // 判断毗邻两数字是否想等，相等的话继续滑动, 避免添加重复的答案
          while (j < k && nums[j] === nums[j + 1]) {
            j += 1;
          }
          while (j < k && nums[k] === nums[k - 1]) {
            k -= 1;
          }
          j += 1;
          k -= 1;
        }
        if (sum < target) {
          while (j < k && nums[j] === nums[j + 1]) {
            j += 1;
          }
          j += 1;
        } else if (sum > target) {
          while (j < k && nums[k] === nums[k - 1]) {
            k -= 1;
          }
          k -= 1;
        }
      }
    }
  }
  return res;
};

threeSum([1, -1, -1, 0]);
threeSum([0, 0, 0, 0]);
// threeSum([-1, 0, 1, 2, -1, -4])
