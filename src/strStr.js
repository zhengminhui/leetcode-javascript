/**
 * https://leetcode.com/problems/implement-strstr/
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * '' '' -> -1
 * 'a' 'a' ->
 * 'abcde' 'cd' ->2
 */
var strStr = function(haystack, needle) {
  // if(needle === null ||haystack === null){
  //     return -1;
  // }
  // if (needle.length === 0) {
  //  return 0;
  // }
  // for (i=0,j=needle.length;i+j<=haystack.length;i++){
  //     if (haystack.substr(i,j) === needle){
  //         return i;
  //     }
  // }
  // return -1;

  // bruto force
  for (var i = 0;; i++) {
    for (var j = 0;; j++) {
      if (j === needle.length) return i;
      if (i + j === haystack.length) return -1;
      if (needle[j] !== haystack[i + j]) break;
    }
  }

};

// console.log(strStr('abcdefg','cd'))
// console.log(strStr('a','a'))
// console.log(strStr('mississippi','pi'))
