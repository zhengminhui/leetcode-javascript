/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
  const arr = new Array(num + 1);
  arr[0] = 0;

  for (let i = 1; i <= num; i++) {
    arr[i] = arr[i >> 1] + (i & 1);
  }

  return arr;
};
