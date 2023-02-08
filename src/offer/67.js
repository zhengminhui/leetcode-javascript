/**
 * @param {string} str
 * @return {number}
 */
var strToInt = function (str) {
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
