/**
 * @param {number} n
 * @return {number}
 * Sieve of Eratosthenes
 */
// 埃氏筛
// 质数，大于 1 的自然数，除了 1 和该数本身，无法被其他自然数整除。
var countPrimes = function (n) {
  const res = new Array(n).fill(true);
  let count = 0;

  // Loop's ending condition is i * i <= num instead of i <= sqrt(num)
  // to avoid repeatedly calling an expensive function sqrt().
  for (let i = 2; i * i < n; i++) {
    if (!res[i]) continue;
    for (let j = i * i; j < n; j += i) {
      res[j] = false;
    }
  }
  for (let i = 2; i < n; i++) {
    if (res[i]) {
      count++;
    }
  }
  return count;
};

console.log(countPrimes(10));
