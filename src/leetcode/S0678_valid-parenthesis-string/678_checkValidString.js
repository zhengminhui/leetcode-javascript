/**
 * @param {string} s
 * @return {boolean}
 */
// 0519note: 用栈很直观，没问题。
// 注意要 push index 进 stack ，因为存在 '**((' 的情况，想到这个测试，就知道存 index 的用处，要保证*的 index 在左括号的右边。
var checkValidString = function (s) {
  const leftStack = [];
  const starStack = [];

  for (let i = 0; i < s.length; i++) {
    const cur = s[i];
    if (cur === '(') {
      leftStack.push(i);
    }
    if (cur === '*') {
      starStack.push(i);
    }
    if (cur === ')') {
      if (leftStack.length) {
        leftStack.pop();
      } else if (starStack.length) {
        starStack.pop();
      } else {
        return false;
      }
    }
  }
  while (leftStack.length && starStack.length) {
    if (leftStack.pop() > starStack.pop()) {
      return false;
    }
  }
  return !leftStack.length;
};
