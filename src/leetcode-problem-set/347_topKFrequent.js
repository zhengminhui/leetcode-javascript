/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    if (map.has(cur)) {
      const count = map.get(cur);
      map.set(cur, count + 1);
    } else {
      map.set(cur, 1);
    }
  }

  return Array.from(map)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((i) => i[0]);
};
