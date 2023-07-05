/**
 * @param {number} n
 * @return {number}
 */
// dp[0] = 0
// dp[i]= i, 全部由 1 构成，3 = 1+1+1
// dp[i - j*j]+ 1 除了 1 之外，还由其他的完全平方数构成
//  n - 1*1
//  n - 2*2
//  n - 3*3
//  n - 4*4
// 4 是完全平方数，所以最小值等于 dp[0] + 1 = 1;
// Time O(n*sqrt(n))
var numSquares = function (n) {
  if (n <= 1) return n;
  const dp = new Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    dp[i] = i;
    for (let j = 1; j * j <= i; j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
  }
  return dp[n];
};
