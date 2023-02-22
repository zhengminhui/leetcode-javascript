/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;
  if (!s.length && !t.length) return true;

  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];
    // 当 s 中不存在时,生成 s[i]: t[i] 的 key-value
    if (map.has(sChar)) {
      if (tChar !== map.get(sChar)) {
        return false;
      }
    } else {
      // badc baba, 当 右b 再次充当对子，返回false
      if (valueContains(map, tChar)) {
        return false;
      }
      map.set(sChar, tChar);
    }
  }

  return true;
};

function valueContains(map, char) {
  const values = [];
  for (const value of map.values()) {
    values.push(value);
  }
  return values.includes(char);
}

// const s = 'bbbaaaba';
// const t = 'aaabbbba';
// console.log(isIsomorphic(s, t));
const s = 'badc';
const t = 'baba';
console.log(isIsomorphic(s, t));
