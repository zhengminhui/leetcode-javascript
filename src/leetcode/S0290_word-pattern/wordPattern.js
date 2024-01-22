/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
//  dog dog dog dog, abba, => false
var wordPattern = function (pattern, s) {
  const map = new Map();
  const arr = pattern.split('');
  const words = s.split(' ');
  if (arr.length !== words.length) return false;
  for (let i = 0; i < arr.length; i++) {
    const value = words[i];
    const key = arr[i];
    if (map.has(key)) {
      if (map.get(key) !== value) {
        return false;
      }
    } else {
      // 当没有 key 的时候，要检查一下 value 是不是已经有了，但是用了别的 key
      // 谨防 dog dog dog dog, abba 的情况
      if (mapContainsValue(map, value)) {
        return false;
      }
      map.set(key, value);
    }
  }
  return true;
};

const mapContainsValue = (map, value) => {
  for (const v of map.values()) {
    if (v === value) return true;
  }
  return false;
};
