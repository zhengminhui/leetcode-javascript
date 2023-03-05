/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const res = [];
  const path = [];

  function backtracking(start) {
    if (start === s.length) {
      res.push(Array.from(path));
      return;
    }

    for (let i = start; i < s.length; i++) {
      const str = s.substring(start, i + 1);

      if (isPalindrome(str)) {
        path.push(str);
        backtracking(i + 1);
        path.pop();
      }
    }
  }

  backtracking(0);
  return res;
};

function isPalindrome(s) {
  if (!s || !s.length) return false;
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (s[i] !== s[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

// const s = 'aab';
const s = 'aabcbba';

console.log(partition(s));
