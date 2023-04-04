/**
 * @param {string} s
 * @return {number}
 */
// 第一次遍历生成 hashmap，
// 第二次找到第一个次数是 1 的，返回 index。
// 否则返回 -1
// time O(n), space O(k) 固定空间，26 字符
var firstUniqChar = function (s) {
  const map = new Map();
  for (const n of s) {
    if (map.has(n)) {
      map.set(n, map.get(n) + 1);
    } else {
      map.set(n, 1);
    }
  }
  for (const n of s) {
    const time = map.get(n);
    if (time === 1) {
      return s.indexOf(n);
    }
  }
  return -1;
};
