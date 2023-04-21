/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let max = 0;
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    // 不考虑重复的数字
    const cur = nums[i];
    if (!map.has(cur)) {
      // 获取左，右邻居序列的长度
      // 新序列的长度，并记录，检查是不是新的最大值
      // 最后更新，新序列左右端的长度。
      const preLen = map.get(cur - 1) || 0;
      const nextLen = map.get(cur + 1) || 0;
      const curLen = preLen + 1 + nextLen;
      map.set(cur, curLen);
      max = Math.max(max, curLen);
      map.set(cur - preLen, curLen);
      map.set(cur + nextLen, curLen);
    }
  }
  return max;
};

const nums = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive(nums));
