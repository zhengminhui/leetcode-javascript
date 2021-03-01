/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 * 反推
 * https://blog.csdn.net/u011500062/article/details/72855826
 */
var lastRemaining = function (n, m) {
  let ans = 0;
  // f(n, m) = (f(n - 1, m) + m) % n;
  for (let i = 2; i <= n; i++) {
    ans = (ans + m) % i;
  }
  return ans;
};
const n = 5;
const m = 3; //3

// const n = 10;
// const m = 17; //2
console.log(lastRemaining(n, m));
