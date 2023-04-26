/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
// dict 记录 t 中的字符
// window 记录遍历 s 时的字符
var minWindow = function (s, t) {
  const dict = new Map();
  for (const c of t) {
    const val = dict.has(c) ? dict.get(c) + 1 : 1;
    dict.set(c, val);
  }
  const window = new Map();
  let left = 0;
  let right = 0;
  // valid 用来记录，window 中出现了几个 t 中的字符，
  // 如果全出现了，就要开始收缩左边
  let valid = 0;
  let start = 0;
  // 给 len 初始一个不可能出现的长度
  let len = s.length + 1;
  while (right < s.length) {
    const char = s[right];
    if (dict.has(char)) {
      const val = window.has(char) ? window.get(char) + 1 : 1;
      window.set(char, val);
      if (window.get(char) === dict.get(char)) {
        valid++;
      }
    }
    right++;
    // valid 满足了，说明当前窗口内包含所有 t 的元素了，开始收缩左边
    while (valid === dict.size) {
      // 如果当前的长度合法，记录下左右端点和长度
      if (right - left < len) {
        start = left;
        len = right - left;
      }
      // 开始从左边剔除 deleteChar
      const dChar = s[left];
      // 如果 dChar 不在 t 中，直接略过
      // 如果在 t 中，开始减少 window 中的计数。
      // 在减少之前，先校验下 valid，因为减少 1 个 char 后，就不满足原先的 valid 数字。
      if (dict.has(dChar)) {
        if (window.get(dChar) === dict.get(dChar)) {
          valid--;
        }
        window.set(dChar, window.get(dChar) - 1);
      }
      left++;
    }
  }
  // 如果 len 没被修改过，说明 valid 从来没满足，返回空
  if (len === s.length + 1) return '';
  return s.substring(start, start + len);
};

const s = 'ADOBECODEBANC';
const t = 'ABC';
console.log(minWindow(s, t));
