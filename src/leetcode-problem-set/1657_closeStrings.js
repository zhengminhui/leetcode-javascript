/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
// 字符串排序后统计各字符的频率，词频一样，表示可以转换
// 注意要是现有字符。uau, ssx 词频一样，但是是 false
var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) return false;

  const map1 = new Map();
  const map2 = new Map();
  for (const c of word1) {
    if (map1.has(c)) {
      map1.set(c, map1.get(c) + 1);
    } else {
      map1.set(c, 1);
    }
  }
  for (const c of word2) {
    if (map2.has(c)) {
      map2.set(c, map2.get(c) + 1);
    } else {
      map2.set(c, 1);
    }
  }
  const feq1 = [...map1.entries()].sort((a, b) => a[1] - b[1]);
  const feq2 = [...map2.entries()].sort((a, b) => a[1] - b[1]);
  if (feq1.length !== feq2.length) return false;
  // 因为是替换成现有的字符，所以要检查 map2 种的 char 是否在 map1 中。这里卡很久。
  for (const [key, value] of map1) {
    if (!map2.has(key)) {
      return false;
    }
  }
  for (let i = 0; i < feq1.length; i++) {
    // 如果词频不等，返回 false
    if (feq1[i][1] !== feq2[i][1]) {
      return false;
    }
  }
  return true;
};

const word1 = 'abbzccca';
const word2 = 'babzzczc';
console.log(closeStrings(word1, word2));
