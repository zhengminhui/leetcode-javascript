/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
//  x**0= 1
//  x**-2 = 1/x^2
// 如果 x 是偶数，自己相乘，然后指数减半。
// 如果 x 是奇数，先把1 个本身提出来，再当做偶数相乘。
var myPow = function (x, n) {
  if (!n) return 1;
  if (n < 0) {
    n = -n;
    x = 1 / x;
  }
  if (n % 2) {
    return x * myPow(x, n - 1);
  }
  return myPow(x * x, n / 2);
};
