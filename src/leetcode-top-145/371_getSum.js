/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
// 剑指 offer 65
// 思路就是针对二进制的每一位，计算是否需要进位，和当前非进位
var getSum = function (a, b) {
  while (b) {
    // 计算是否有进位， 1&1 << 1 = 2(10), 1&0 << 1 = 0
    const c = (a & b) << 1;
    // 计算非进位，通过异或可以实现相加
    // 1^1 = 0; 1^0 = 1
    a = a ^ b;
    b = c;
  }
  return a;
};
