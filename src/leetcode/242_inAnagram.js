/**
 * https://leetcode.com/problems/valid-anagram/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * Use split to break string to a char array.
 * Then use array method sort, and finally use join to build a new string.
 * Campare these two strings.
 * Time O(n)
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  var sortS = s.split('').sort().join();
  var sortT = t.split('').sort().join();
  return sortS === sortT;
};
