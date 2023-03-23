/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// 滑动窗口
var findAnagrams = function (s, p) {
  let left = 0;
  let right = 0;
  const need = new Map();
  const window = new Map();
  let valid = 0;
  const res = [];
  for (const char of p) {
    if (need.has(char)) {
      need.set(char, need.get(char) + 1);
    } else {
      need.set(char, 1);
    }
  }

  while (right < s.length) {
    const char = s[right];
    right++;
    if (need.has(char)) {
      if (window.has(char)) {
        window.set(char, window.get(char) + 1);
      } else {
        window.set(char, 1);
      }
      if (window.get(char) === need.get(char)) {
        valid++;
      }
    }
    // 如果当前窗口的长度大于 p 了，就可以开始剔除左边
    while (right - left >= p.length) {
      if (valid === need.size) {
        res.push(left);
      }
      const dChar = s[left];
      left++;
      if (need.has(dChar)) {
        if (window.get(dChar) === need.get(dChar)) {
          valid--;
        }
        window.set(dChar, window.get(dChar) - 1);
      }
    }
  }
  return res;
};
