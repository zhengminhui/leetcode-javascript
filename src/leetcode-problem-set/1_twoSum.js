/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 用 hash，遍历一遍，前面记录 diff，后面找 diff 是否存在。
var twoSum = function (nums, target) {
  const map = new Map();
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    const diff = target - cur;
    if (map.has(cur)) {
      res.push(i, map.get(cur));
    }
    map.set(diff, i);
  }
  return res;
};
