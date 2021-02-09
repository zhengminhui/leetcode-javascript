/**
 * https://leetcode.com/problems/implement-strstr/
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * two pointers
 * '' '' -> -1
 * 'hello' '' -> 0
 * 'a' 'a' -> 0
 * 'abcde' 'cd' ->2
 */
var strStr = function (haystack, needle) {
  if (haystack === null || needle === null) {
    return -1;
  }
  if (needle.length === 0) {
    return 0;
  }
  // i, j can reach the lenght, means it tranversed the to the end
  for (var i = 0; i <= haystack.length; i++) {
    for (var j = 0; j <= needle.length; j++) {
      // means already tranversed needle and did not break
      if (j === needle.length) {
        return i;
      }
      // means already tranversed to the end of haystack, however did not finish tranverse needle
      if (i + j === haystack.length) {
        return -1;
      }
      // char not match 
      if (needle[j] !== haystack[i + j]) {
        break;
      }
    }
  }
};
