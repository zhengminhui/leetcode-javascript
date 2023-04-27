/**
 * @param {string} s
 * @return {boolean}
 */
// stack push 左括号，遇到非左括号，pop 出来，检查是否配对。
var isValid = function (s) {
  if (s.length % 2 !== 0) return false;
  const dict = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  const stack = [];

  for (const char of s) {
    if (dict[char]) {
      stack.push(char);
    } else {
      const pair = stack.pop();
      if (char !== dict[pair]) {
        return false;
      }
    }
  }

  return !stack.length;
};
