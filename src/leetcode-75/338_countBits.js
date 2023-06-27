/**
 * @param {number} num
 * @return {number[]}
 */
// 有点 dp 的感觉，arr[i] 取决于 arr[i 右移 1 位的数]，再加上 最后一位和 1 的按位与。
// 5 等于： 5 >> 1 = 2， 2的 bit 有 1 个 1，再加上 5 自己的最后一个 1
var countBits = function (num) {
  const arr = new Array(num + 1).fill(0);

  for (let i = 1; i <= num; i++) {
    arr[i] = arr[i >> 1] + (i & 1);
  }

  return arr;
};
