/**
 * @param {number[]} nums
 * @return {number}
 */
// 同时记录最大，最小值，存在负负得正的情况
var maxProduct = function (nums) {
  let maxPre = nums[0];
  let minPre = nums[0];
  let res = nums[0];
  let maxHere;
  let minHere;

  for (let i = 1; i < nums.length; i++) {
    const cur = nums[i];
    maxHere = Math.max(cur, Math.max(maxPre * cur, minPre * cur));
    minHere = Math.min(cur, Math.min(maxPre * cur, minPre * cur));
    res = Math.max(res, maxHere);
    maxPre = maxHere;
    minPre = minHere;
  }

  return res;
};
