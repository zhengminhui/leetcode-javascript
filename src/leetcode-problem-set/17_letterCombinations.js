/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits.length) return [];

  const dict = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };
  const res = [];
  const path = [];

  function backtracking(index, path) {
    if (path.length === digits.length) {
      res.push(path.join(''));
      return;
    }
    // 获得当前数字对应的字符串
    const str = dict[digits[index]];

    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      path.push(char);
      backtracking(index + 1, path);
      path.pop();
    }
  }

  backtracking(0, path);
  return res;
};
