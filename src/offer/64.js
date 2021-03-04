/**
 * @param {number} n
 * @return {number}
 * 不能使用循环，则考虑使用递归，
 * 不能使用 if， 则使用 && 判断是否继续
 */
var sumNums = function (n) {
  n && (n += sumNums(n - 1));
  return n;
};
