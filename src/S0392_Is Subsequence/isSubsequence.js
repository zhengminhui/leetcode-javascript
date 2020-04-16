/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (!s.length) return true;

  let indexS = 0;
  let indexT = 0;

  while (indexT < t.length) {
    if (s[indexS] === t[indexT]) {
      indexS += 1;
      if (indexS === s.length) {
        return true;
      }
    }
    indexT += 1;
  }
  return false;
};
