/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function (a) {
  const len = a.length;
  const left = new Array(len).fill(1);
  const right = new Array(len).fill(1);
  const res = [];
  // 先计算当前数左边的乘积，从第二个数开始计算，第一个数左边没有，left[0] 是 1
  // 再即算当前数右边的乘积，同理，从倒数第二个数开始算，right[len - 1] 是 1
  // 最后两数组相乘得到所有数的乘积。
  for (let i = 1; i < a.length; i++) {
    left[i] = a[i - 1] * left[i - 1];
  }
  for (let j = len - 1 - 1; j >= 0; j--) {
    right[j] = a[j + 1] * right[j + 1];
  }
  for (let k = 0; k < len; k++) {
    res[k] = left[k] * right[k];
  }

  return res;
};
