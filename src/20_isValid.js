/**
 * @param {string} s
 * @return {boolean}
 * left mark push, right mark pop and check
 * finally check if any mark left in the stack
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) {
    return false;
  }
  var dict = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  var stack = [];
  for (var i = 0; i < s.length; i++) {
    var curr = s[i];
    if (curr in dict) {
      stack.push(curr);
    } else {
      var item = stack.pop();
      if (dict[item] !== curr) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
