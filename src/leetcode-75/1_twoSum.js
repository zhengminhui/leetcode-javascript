/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();
  const res = [];
  nums.forEach((num, i) => {
    const diff = target - num;
    if (map.has(diff)) {
      const index = map.get(diff);
      res.push(index, i);
    }
    map.set(num, i);
  });
  return res;
};
