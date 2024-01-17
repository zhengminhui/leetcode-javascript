/**
 * @param {number[]} nums
 * @return {number}
 */
// 贪心算法 time O(n) space O(1)
// end 表示一定要移动了，启动的时候，就是一个一定要移动的时候。
var jump = function (nums) {
  let end = 0;
  let farthest = 0;
  let res = 0;
  // i 是一步一步向前，追逐 farthest。终止是 nums.length - 2
  for (let i = 0; i < nums.length - 1; i++) {
    // 当前位置能跳的最远处，是 nums[i] + i ，
    // 如[3,2,1] 第一个能跳的最远处是 3+0
    farthest = Math.max(nums[i] + i, farthest);
    // 如果现在的位置已经到了 end 处，就一定要走一步了。所以 res++，用能走的 farthest 更新 end。
    // 第一步开始的时候，就会第一次判断 end
    if (end === i) {
      res++;
      end = farthest;
      // 如果中间过程就能到最后，就不用再走完全程了。
      if (farthest === nums.length - 1) {
        return res;
      }
    }
  }
  return res;
};
