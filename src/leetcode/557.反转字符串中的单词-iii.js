/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 */
// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let res = "";
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    const cur = s[i];
    if (cur !== " ") {
      stack.push(cur);
    } else {
      // when met space, pop out all char in stack
      while (stack.length) {
        res = res.concat(stack.pop());
      }
      res = res.concat(" ");
    }
  }
  // in the end, pop up remaining chars
  while (stack.length) {
    res = res.concat(stack.pop());
  }
  return res;
};
// @lc code=end
