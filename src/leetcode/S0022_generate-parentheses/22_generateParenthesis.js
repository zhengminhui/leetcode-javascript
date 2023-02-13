/**
 * @param {number} n
 * @return {string[]}
 */
// 两个判断条件，左括号应当等于n，所以不到n时，可以添加左括号。
// 第二个，遍历过程中，不可能先添加右括号，所以当右括号小于等于左括号时，可以添加右括号。
var generateParenthesis = function (n) {
  const res = [];
  recur(0, 0, n, '', res);
  return res;
};

function recur(left, right, n, str, arr) {
  if (left === n && right === n) {
    arr.push(str);
    return;
  }

  if (left < n) {
    recur(left + 1, right, n, `${str}(`, arr);
  }

  if (right < left) {
    recur(left, right + 1, n, `${str})`, arr);
  }
}
