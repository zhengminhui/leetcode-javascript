/**
 * @param {string} s
 * @return {string[][]}
 */
// 0516note:
// 要注意
// 回溯方程开始传入的是 start index，
// 在回溯方程里开始遍历的i从 start 开始，后序递归传的是 i
var partition = function (s) {
  const res = [];
  const path = [];

  function backtracking(start, path) {
    if (start === s.length) {
      res.push(Array.from(path));
      return;
    }
    for (let i = start; i < s.length; i++) {
      const str = s.substring(start, i + 1);
      if (isPalindrome(str)) {
        path.push(str);
        backtracking(i + 1, path);
        path.pop();
      }
    }
  }

  backtracking(0, path);
  return res;
};

function isPalindrome(str) {
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (str[i] !== str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}
