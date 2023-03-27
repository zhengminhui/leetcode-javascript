/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  const len = s.length;
  const dp = new Array(len).fill(false);
  let count = 0;

  // 从二维矩阵左上角开始遍历，所以，外层是 j，内层是 i
  // 只用遍历一半，所以 i = j
  // 后一列依赖前一列的数据，所以最后 dp 只用一维数组。
  for (let j = 0; j < len; j++) {
    for (let i = 0; i <= j; i++) {
      if (i === j) {
        // single char
        dp[i] = true;
        count += 1;
      } else if (j - i === 1 && s[i] === s[j]) {
        // 2 same chars eg: aa, bb
        dp[i] = true;
        count += 1;
      } else if (j - i > 1 && s[i] === s[j] && dp[i + 1]) {
        // if longer than 2 chars, head and tail must be the same
        // and dp左下方是回文
        dp[i] = true;
        count += 1;
      } else {
        dp[i] = false;
      }
    }
  }

  return count;
};

function isPalindrome(str) {
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (str[i] !== str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

// const s = 'abc';
// const s = 'aaa';
const s = 'aba';
// const s = 'fdsklf';
console.log(countSubstrings(s));
