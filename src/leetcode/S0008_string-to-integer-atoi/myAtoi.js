/**
 * @param {string} str
 * @return {number}
 * First check if the string has +/- sign,
 * then start to iterate the string. if it's a number, good, otherwise break;
 * Don't forget to handle overflow case, if larger than MAX_INT,
 * return MAX_INT(2^31-1), else if smaller than MIN_INT, return MIN_INT(-2^31);
 */
var myAtoi = function (str) {
  const s = str.trim();
  if (!s.length) return 0;

  let sign = 1;
  let i = 0;
  let res = 0;

  if (s[0] === '+') {
    sign = 1;
    i = 1;
  } else if (s[0] === '-') {
    sign = -1;
    i = 1;
  } else {
    i = 0;
  }

  while (i < s.length) {
    const cur = parseInt(s[i], 10);
    if (cur >= 0 && cur <= 9) {
      console.log(s[i], cur, res);
      res = res * 10 + cur;
    } else {
      break;
    }
    i++;
  }
  res = res * sign;

  if (res > 2 ** 31 - 1) {
    res = 2 ** 31 - 1;
  } else if (res < (-2) ** 31) {
    res = (-2) ** 31;
  }

  return res;
};
