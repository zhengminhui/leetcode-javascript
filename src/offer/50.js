/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  // map 会保证 insert 的顺序
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!map.has(char)) {
      map.set(char, 1);
    } else {
      map.set(char, map.get(char) + 1);
    }
  }

  for (const [key, value] of map) {
    if (value === 1) {
      return key;
    }
  }
  return ' ';
};

// const s = "abaccdeff"; // "b"

const s = ''; // " "
console.log(firstUniqChar(s));
