/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  // map 会保证 insert 的顺序
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (map.has(char)) {
      map.set(char, false);
    } else {
      map.set(char, true);
    }
  }
  for (const [key, value] of map) {
    if (value) {
      return key;
    }
  }
  return " ";
};

// const s = "abaccdeff"; // "b"

const s = ""; // " "
console.log(firstUniqChar(s));
