/**
 * @param {number} num
 * @return {number}
 */
// 末位对 10 取余，一次相加。如果当 num 处理完成了 0，
// 但是 res 仍不是一个数，则重新赋值，继续求和。
var addDigits = function (num) {
  let res = 0;
  while (num) {
    res += num % 10;
    num = Math.floor(num / 10);

    if (!num && res >= 10) {
      num = res;
      res = 0;
    }
  }
  return res;
};
