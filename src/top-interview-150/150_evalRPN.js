/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];
  for (const i of tokens) {
    if (isOperator(i)) {
      const b = stack.pop();
      const a = stack.pop();
      let res;
      if (i === '+') {
        res = a + b;
      }
      if (i === '-') {
        res = a - b;
      }
      if (i === '*') {
        res = a * b;
      }
      if (i === '/') {
        // 向 0 截断，所以需要区分正负
        res = a / b > 0 ? Math.floor(a / b) : Math.ceil(a / b);
      }
      stack.push(res);
    } else {
      stack.push(parseInt(i, 10));
    }
  }
  function isOperator(s) {
    return s === '+' || s === '-' || s === '*' || s === '/';
  }
  return stack.pop();
};
