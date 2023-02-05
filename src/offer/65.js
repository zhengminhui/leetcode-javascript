/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function (a, b) {
  // 分成两步，
  // 第1步，解决进位的问题，7(0111) 和 5(0101), &之后有进位，所以左移 1 位，
  // 第2步，不用进位bit，就是异或，比如 1(01),2(10),异或后是3(11)
  // 当进位为 0 时退出 ，也就是 c 为 0 时
  while (b) {
    // 计算进位
    const c = (a & b) << 1;
    // 计算非进位
    a = a ^ b;
    b = c;
  }
  return a;
};

const a = 3;
const b = -5;
console.log(add(a, b));
