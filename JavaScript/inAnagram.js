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
    return s.split("").sort().join() === t.split("").sort().join();
};
