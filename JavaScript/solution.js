/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 * trick: when get the mid number, don't use (low + high)/2, will cause overflow, 
 * should use low + (high - low)/2;
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    var lb = 1,
      ub = n;
    while (lb < ub) {
      var cur = Math.floor(lb + (ub - lb) / 2);
      // if cur is bad, check left part (inclusive, since this version may be the answer)
      if (isBadVersion(cur)) {
        ub = cur;
      } else {
        // if cur is good, check right part
        lb = cur + 1;
      }
    }
    return ub;
  };
};
