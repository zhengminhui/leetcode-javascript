/**
 * @param {string} s
 * @return {number}
 */
// 题目要求，每个 | 都会有一对
// 所以控制一个 inside boolean 变量，如果* 在 inside 里，就不统计，在外，就统计
var countAsterisks = function (s) {
  let res = 0;
  let p = 0;
  let inside = false;
  while (p <= s.length) {
    const cur = s[p];
    if (cur === '*' && !inside) {
      res++;
    }
    if (cur === '|') {
      inside = !inside;
    }
    p++;
  }
  return res;
};
