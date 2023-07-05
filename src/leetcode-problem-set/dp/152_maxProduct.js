/**
 * https://leetcode.com/problems/maximum-product-subarray/
 * @param {number[]} nums
 * @return {number}
 * Time O(n) Space O(1)
 *
 * Unlike add, max product need to remember both max value and min value in case of negative number.
 * And in case one negative number multiple another negative number and become positive, we need to
 * compare both of them before compare to current number.
 */
// 因为是乘积，所以可能出现最后来了一个负数，负负得正，
// 所以还要保留负数值，所以还要记录 minPre。
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
