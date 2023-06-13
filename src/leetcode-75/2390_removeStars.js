/**
 * @param {string} s
 * @return {string}
 */
// 简单的 mid 题，一次遍历，遇到⭐️就 pop ，不是就 push
var removeStars = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '*') {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.join('');
};
