/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 排序后，从头开始遍历，
// i 确定当前的头，left, right 确定线段，由两边向中间收敛，检查是否存在三元组
var threeSum = function (nums) {
  const len = nums.length;
  // 注意一定要传 callback function，没有传时遇到坑，卡了很久。
  nums.sort((a, b) => a - b);
  const res = [];

  for (let i = 0; i < len - 2; i++) {
    let left = i + 1;
    let right = len - 1;
    if (nums[i] === nums[i - 1]) {
      continue;
    }
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum < 0) {
        left += 1;
      } else if (sum > 0) {
        right -= 1;
      } else if (sum === 0) {
        res.push([nums[i], nums[left], nums[right]]);
        // 如果有相同的 left 或 right，避免重复
        while (left < right && nums[left] === nums[left + 1]) {
          left += 1;
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right -= 1;
        }
        // 过滤完之后，各自收敛 1 步，继续寻找。
        left += 1;
        right -= 1;
      }
    }
  }
  return res;
};

const nums = [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4];
console.log(threeSum(nums));
