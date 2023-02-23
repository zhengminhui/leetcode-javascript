/**
 * @param {string} s
 * @return {number}
 */
// 滑动窗口
var lengthOfLongestSubstring = function (s) {
  if (!s || !s.length) return 0;

  const map = new Map();
  let maxLength = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    const cur = s[right];
    // 如果遇到重复的，只能从重复的下一位开始重新计算长度。
    // 之前我的思路时clear map，在这种情况就不行了。比如"dvdf"
    if (map.has(cur) && map.get(cur) >= left) {
      left = map.get(cur) + 1;
    }

    // 用当前 index 作为value
    map.set(cur, right);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};

// const s = 'pwwkew';
// const s = 'abcabcbb';
// const s = ' ';
const s = 'dvdf';
console.log(lengthOfLongestSubstring(s));
