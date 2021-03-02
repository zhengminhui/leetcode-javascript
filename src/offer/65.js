/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function (a, b) {
  // 当进位为 0 时退出 ，也就是 c 为 0 时
  while (b) {
    // 计算进位
    let c = (a & b) << 1;
    // 计算非进位
    a = a ^ b;
    b = c;
  }
  return a;
};

const a = 3;
const b = -5;
console.log(add(a, b));
