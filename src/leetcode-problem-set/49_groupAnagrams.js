/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const dict = {};

  for (let i = 0; i < strs.length; i++) {
    const charNum = strToCharNum(strs[i]);
    if (dict[charNum]) {
      dict[charNum].push(strs[i]);
    } else {
      dict[charNum] = [strs[i]];
    }
  }
  const res = [];
  Object.keys(dict).forEach((key) => {
    res.push(dict[key]);
  });
  return res;
};

function strToCharNum(str) {
  const arr = new Array(26).fill(0);
  for (let i = 0; i < str.length; i++) {
    const cur = str[i].charCodeAt() - 'a'.charCodeAt();
    arr[cur] += 1;
  }
  // 不要用空 join，字符可能大于 10，
  // 会出现 b1c0d10 凑成 1010,和 b10c1d0，也是 1010
  return arr.join(',');
}
