/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let res = '1';

  // 要到第 n 个 str，要走 n-1 步
  for (let i = 0; i < n - 1; i++) {
    let tmp = '';
    let count = 1;
    // j is used to iterate the res and
    // check if previous two chars are the same,
    // if true, update the count by one,
    // else concat a new string with how many nums
    for (let j = 1; j <= res.length; j++) {
      if (j < res.length && res[j] === res[j - 1]) {
        count++;
      } else {
        const countStr = count.toString();
        tmp += countStr + res[j - 1];
        count = 1;
      }
    }
    res = tmp;
  }

  return res;
};
