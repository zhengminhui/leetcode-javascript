/**
 * @param {string} s
 * @return {string}
 */
//  刚开始我想找到中点，双指针向两边比较。然后意识到回文可能不在中间。
//  用动态规划，分别从每个字符往两边找寻。时间复杂度为O(n^2)
var longestPalindrome = function (s) {
  if (s.length < 2) return s;

  let maxLen = 0;
  let start = 0;

  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(i, i);
    expandAroundCenter(i, i + 1);
  }

  function expandAroundCenter(left, right) {
    // 左右指针在s上，并且左右相等
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const curLen = right - left + 1;
      if (curLen > maxLen) {
        maxLen = curLen;
        start = left;
      }
      // 满足条件是，向两边扩展
      left--;
      right++;
    }
  }

  return s.substring(start, start + maxLen);
};
