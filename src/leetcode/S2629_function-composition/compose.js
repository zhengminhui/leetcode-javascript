/**
 * @param {Function[]} functions
 * @return {Function}
 */
// 闭包的题，compose 先保存 fn 数组，注意从右开始，所以要 reverse
// 在内层，如果 fns 长度为零，直接返回 x，否则依次调用
// 注意，因为是积累运算，res 需要重新赋值，这里卡了很久，想当然变成累加，应该是重新赋值。
var compose = function (functions) {
  const fns = functions.reverse();
  return function (x) {
    if (fns.length === 0) return x;
    let res = x;
    fns.forEach((fn) => {
      res = fn(res);
    });
    return res;
  };
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
