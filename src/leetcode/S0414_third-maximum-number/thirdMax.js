/**
 * @param {number[]} nums
 * @return {number}
 */
// 要求时间 O(n)， 就一次遍历，空间换时间，
// 记录前三的数,初始值为负无穷，返回c, 检查 c 有没有被赋过值
// [1,2,-2147483648]
var thirdMax = function (nums) {
  let a = -Infinity;
  let b = -Infinity;
  let c = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    if (cur > a) {
      // 不能少了下面这两步,相当于把 a,b,c整体右移 1 位，赋予 a 新的值
      c = b;
      b = a;
      a = cur;
    }
    if (cur < a && cur > b) {
      c = b;
      b = cur;
    }
    if (cur < b && cur > c) {
      c = cur;
    }
  }
  return c === -Infinity ? a : c;
};
