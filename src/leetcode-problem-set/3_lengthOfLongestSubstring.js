/**
 * @param {string} s
 * @return {number}
 */
// 滑动窗口，先膨胀，吸纳新字符，遇到重复再收缩。
var lengthOfLongestSubstring = function (s) {
  let left = 0;
  let right = 0;
  let max = 0;
  const map = new Map();

  while (right < s.length) {
    const char = s[right];
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
    right++;
    // 如果 window 的某个 char 大于 1，说明有重复的，
    // 这个时候开始剔除左端点
    while (map.get(char) > 1) {
      const dChar = s[left];
      if (map.has(dChar)) {
        map.set(dChar, map.get(dChar) - 1);
      }
      left++;
    }
    max = Math.max(right - left, max);
  }
  return max;
};

// const s = 'pwwkew';
// const s = 'abcabcbb';
// const s = ' ';
const s = 'dvdf';
console.log(lengthOfLongestSubstring(s));
