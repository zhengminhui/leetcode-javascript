/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const res = [];
  const map = new Map();
  for (let i = 0; i < strs.length; i++) {
    const cur = strs[i];
    const p = cur.split('').sort().join('');
    if (map.has(p)) {
      const arr = map.get(p);
      arr.push(cur);
      map.set(p, arr);
    } else {
      map.set(p, [cur]);
    }
  }
  // for-of a map
  for (const [p, arr] of map) {
    res.push(arr);
  }
  return res;
};
