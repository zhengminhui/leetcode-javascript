/**
 * @param {number[]} nums
 * @return {number}
 */
// 出现 3 次的数字，按每一位相加，然后对 3 取余，剩下的位数上的数，再加起来，就是只出现过 1 次的数字。
// 因为每个数字小于 2^31,所以遍历 32 位。
// 对于每一位，计算完了 cnt 之后，用 cnt 来判断是否被 3 整除。
// res | bit ，按位或可以实现累加的功能，01|10=1+2=3.
// 等同于 res += (1*bit)
var singleNumber = function (nums) {
  let res = 0;
  for (let i = 0; i < 32; i++) {
    let cnt = 0;
    const bit = 1 << i;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] & bit) {
        cnt++;
      }
    }

    if (cnt % 3 !== 0) {
      res = res | bit;
      // res += 1 * bit;
    }
  }

  return res;
};
