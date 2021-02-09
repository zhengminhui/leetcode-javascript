/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();
  let res;
  nums.forEach((num, i) => {
    const diff = target - num;
    if (map.has(diff)) {
      const index = map.get(diff);
      res = [index, i];
    }
    map.set(num, i);
  });
  return res;
};
