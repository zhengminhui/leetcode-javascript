/**
 * @param {number} n
 * @return {string[]}
 */
// 两个判断条件，左括号应当等于n，所以不到n时，可以添加左括号。
// 第二个，遍历过程中，不可能先添加右括号，所以当右括号小于等于左括号时，可以添加右括号。
var generateParenthesis = function (n) {
  const res = [];

  function backtracking(left, right, n, path) {
    if (left === n && right === n) {
      res.push(path);
      return;
    }

    if (left < n) {
      backtracking(left + 1, right, n, path + '(');
    }

    if (right < left) {
      backtracking(left, right + 1, n, path + ')');
    }
  }

  backtracking(0, 0, n, '');
  return res;
};
