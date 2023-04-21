/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const map = new Map();
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    // 不考虑重复的数字
    // 获取左，右邻居序列的长度
    // 新序列的长度，并记录，检查是不是新的最大值
    // 最后更新，新序列左右端的长度。

    if (!map.has(cur)) {
      const pre = map.get(cur - 1) || 0;
      const lat = map.get(cur + 1) || 0;
      const len = pre + 1 + lat;
      map.set(cur, len);
      max = Math.max(len, max);
      map.set(cur - pre, len);
      map.set(cur + lat, len);
    }
  }

  return max;
};
