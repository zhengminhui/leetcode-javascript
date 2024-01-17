/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
// 从短串的最长处开始遍历，找到第一个满足的 gcd 即是最大的。
var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) return '';

  const short = str1.length < str2.length ? str1 : str2;
  const long = str2.length > str1.length ? str2 : str1;
  let len = short.length;

  while (len > 0) {
    const i = short.length / len;
    const j = long.length / len;
    // 都能整除，才进行判断，否则，继续增长。
    if (Number.isInteger(i) && Number.isInteger(j)) {
      const gcd = short.substring(0, len);
      // 如果 substring repeat 之后相等，说明是公因子.
      const shortRepeat = gcd.repeat(i);
      const longRepeat = gcd.repeat(j);
      if (shortRepeat === short && longRepeat === long) {
        return short.substring(0, len);
      }
    }
    len--;
  }
  return '';
};
