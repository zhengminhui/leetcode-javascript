/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
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
  if (!digits.length) return res;

  function backtrack(index, c) {
    if (c.length === digits.length) {
      res.push(c.join(''));
      return;
    }

    const curChar = dict[digits[index]];

    for (let i = 0; i < curChar.length; i++) {
      c.push(curChar[i]);
      backtrack(index + 1, c);
      c.pop();
    }
  }

  backtrack(0, []);
  return res;
};

const digits = '23';
console.log(letterCombinations(digits));
