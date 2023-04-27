/**
 * @param {number[]} nums
 * @return {number}
 */
// 使用异或，n 异或 n 为 0， 2^2 = 0
// 0 ^ n = n
var singleNumber = function (nums) {
  let single = 0;
  for (const n of nums) {
    single ^= n;
  }
  return single;
};
