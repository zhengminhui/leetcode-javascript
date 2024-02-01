/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
// 注意 fn params 的顺序。
var reduce = function (nums, fn, init) {
  let res = init;
  for (let i = 0; i < nums.length; i++) {
    const accu = res;
    const cur = nums[i];
    res = fn(accu, cur);
  }

  return res;
};
