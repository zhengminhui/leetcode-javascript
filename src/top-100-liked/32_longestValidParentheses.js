/**
 * @param {string} s
 * @return {number}
 */
// stack 记录的是 index
// dp 记录的是，截止当前，有效括号的长度
var longestValidParentheses = function (s) {
  const stack = [];
  const dp = new Array(s.length + 1).fill(0);

  for (let i = 0; i < s.length; i++) {
    // 如果遇到左括号，就把 index 入栈
    // 当前 dp 记录的是，合法的括号长度，因为是左括号，所以是 0
    if (s.charAt(i) === '(') {
      stack.push(i);
      dp[i + 1] = 0;
    } else {
      // 如果遇到右括号，当 stack 内有左括号时，开始计算这段子串的长度。
      if (stack.length > 0) {
        const leftIndex = stack.pop();
        // 1 + i - leftIndex 是子串长度，还要加上之前的合法长度，所以加上 dp[leftIndex]
        const len = 1 + i - leftIndex + dp[leftIndex];
        dp[i + 1] = len;
      } else {
        // 遇到一个孤零零的右括号，不合法，所以是 0.
        dp[i + 1] = 0;
      }
    }
  }
  return Math.max(...dp);
};
