/**
 * @param {string} s
 * @return {number}
 */
// 滑动窗口
var lengthOfLongestSubstring = function (s) {
  if (!s || !s.length) return 0;

  const window = new Map();
  let maxLength = 0;
  let left = 0;
  let right = 0;

  while (right < s.length) {
    const char = s[right];
    right++;
    if (window.has(char)) {
      window.set(char, window.get(char) + 1);
    } else {
      window.set(char, 1);
    }
    // 如果 window 的某个 char 大于 1，说明有重复的，这个时候开始剔除左端点
    while (window.get(char) > 1) {
      const dChar = s[left];
      left++;
      if (window.has(dChar)) {
        window.set(dChar, window.get(dChar) - 1);
      }
    }
    maxLength = Math.max(maxLength, right - left);
  }
  return maxLength;
};

// const s = 'pwwkew';
// const s = 'abcabcbb';
// const s = ' ';
const s = 'dvdf';
console.log(lengthOfLongestSubstring(s));
