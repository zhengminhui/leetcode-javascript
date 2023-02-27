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
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let low = 0;
    let high = n;
    while (low < high) {
      const mid = Math.floor(low + (high - low) / 2);
      if (isBadVersion(mid)) {
        high = mid;
      } else {
        low = mid + 1;
      }
    }
    return low;
  };
};
