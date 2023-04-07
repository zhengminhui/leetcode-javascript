/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
  const str = num.toString();
  const len = str.length;

  const dp = new Array(len + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= len; i++) {
    const one = str.charAt(i - 1);
    const two = str.charAt(i - 2);

    if (one >= '0' && one <= '9') {
      dp[i] = dp[i] + dp[i - 1];
    }
    if (two === '1' || (two === '2' && one <= '5')) {
      dp[i] = dp[i] + dp[i - 2];
    }
  }

  return dp[len];
};
