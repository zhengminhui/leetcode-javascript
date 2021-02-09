/**
 * https://leetcode.com/problems/longest-common-prefix/
 * @param {string[]} strs
 * @return {string}
 * 'abcd'.indexOf('abcf') -> -1
 * 'abcd'.indexOf('abc') -> 0
 * to satisfy all, first satisfy one
 * Get the first string as a template, and find the template in the latter strings, 
 * if can find the template, then keep going. Otherwise, use a while loop to remove 
 * the last char untill find the template. It will either keep going if find the template
 *  or the template reduce to empty string. Thus return the template. 
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return "";
  }
  var prefix = strs[0];
  for (var i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
    }
  }
  return prefix;
};
