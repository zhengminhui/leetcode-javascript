/**
 * @param {string} s
 * @return {number}
 * corner case: "", "    ", "a", "aa", "a    b    ";
 * Use i to iterate s from backend, use j to calculate last word's length;
 * if char is space, and j is not 0, that means alsready find a word,
 * at this time break loop and return j, otherwise keep going;
 * if char is not space, increase j, means calculating the length of this word.
 */
var lengthOfLastWord = function(s) {
  var count = 0;
  for (var i = s.length - 1; i >= 0; i--) {
    if (s[i] === ' ') {
      if (count > 0) {
        break;
      }
      continue;
    } else {
      count++;
    }
  }
  return count;
};
