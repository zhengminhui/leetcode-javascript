/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// 滑动窗口, 先扩大窗口，当两指针长度 大于等于 p 的长度时，收缩窗口。
// 当字符valid数等于 dict size 时，记为满足的一组。
var findAnagrams = function (s, p) {
  const dict = new Map();
  for (const c of p) {
    if (dict.has(c)) {
      dict.set(c, dict.get(c) + 1);
    } else {
      dict.set(c, 1);
    }
  }

  const window = new Map();
  let left = 0;
  let right = 0;
  let valid = 0;
  const res = [];

  while (right < s.length) {
    const char = s[right];
    if (dict.has(char)) {
      if (window.has(char)) {
        window.set(char, window.get(char) + 1);
      } else {
        window.set(char, 1);
      }
      if (window.get(char) === dict.get(char)) {
        valid++;
      }
    }
    right++;
    // 如果当前窗口的长度大于 p 了，就可以开始剔除左边
    while (right - left >= p.length) {
      if (valid === dict.size) {
        res.push(left);
      }
      const dChar = s[left];
      if (dict.has(dChar)) {
        if (window.get(dChar) === dict.get(dChar)) {
          valid--;
        }
        window.set(dChar, window.get(dChar) - 1);
      }
      left++;
    }
  }
  return res;
};
