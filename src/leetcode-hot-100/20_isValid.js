/**
 * @param {string} s
 * @return {boolean}
 * left mark push, right mark pop and check
 * finally check if any mark left in the stack
 */
var isValid = function (s) {
  if (s.length % 2) return false;

  const dict = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const cur = s[i];
    if (cur in dict) {
      stack.push(cur);
    } else {
      const match = stack.pop();
      if (cur !== dict[match]) {
        return false;
      }
    }
  }

  return !stack.length;
};
