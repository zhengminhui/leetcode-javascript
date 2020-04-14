/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 2) return n;

  // method 1 recursion: may generate Time Limit Exceeded
  // return climbStairs(n - 1) + climbStairs(n - 2);

  let fib = 0;
  let first = 1;
  let second = 2;
  while (n >= 3) {
    fib = first + second;
    first = second;
    second = fib;
    n--;
  }
  return fib;
};
