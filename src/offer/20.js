/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  s = s.trim();
  if (!s.length) return false;
  return !Number.isNaN(s);
};

const case1 = '0';
const case2 = '3';
const case3 = 'e';
const case4 = ' ';
const case5 = '078332e437';
const case6 = '    .1  ';
