/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      res += 1;
    }
  }
  return res;
};

var search2 = function (nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    if (map[cur]) {
      map[cur] += 1;
    } else {
      // if first met, should set to 1
      // got stuck here for a long time, uh
      map[cur] = 1;
    }
  }
  return map[target] || 0;
};
