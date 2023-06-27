/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
// 翻一下，要满足 a|b = c。
// 每个数先和 1 按位与，找到最右的数。 tc means temp c。
// 如果各自最右的数满足公式，这一位就可以略过。
// 如果不满足
// 如果 tc 不是 0，是 1，说明 ta, tb 没法 异或成 1（因为没满足公式嘛），所以两个都是 0，这时翻转任意 1 个就行，所以 res 加 1
// 如果 tc 是 0， 同样因为公式没满足，所以 ta,tb 异或为 1，分两种情况，如果两个都是 1，这个时候就要两步，分别对 ta,tb 操作，所以 res + 2，如果 ta 1 tb 0, 就只需要对 ta 翻转就可以了，res +1。 这种情况下 ta tb 不可能同时为 0，因为两个 0 不可能异或成 1.
// 这一轮算完以后，各自右移一位。
// 直到所有数字都为 0，才算计算完成。
var minFlips = function (a, b, c) {
  let res = 0;
  while (a || b || c) {
    const tc = c & 1;
    const tb = b & 1;
    const ta = a & 1;
    // 注意这里 异或优先级 低于 不等于，所以要加括号。
    if ((ta | tb) !== tc) {
      if (tc === 0) {
        res += ta === tb ? 2 : 1;
      } else {
        res += 1;
      }
    }
    c = c >> 1;
    b = b >> 1;
    a = a >> 1;
  }
  return res;
};
