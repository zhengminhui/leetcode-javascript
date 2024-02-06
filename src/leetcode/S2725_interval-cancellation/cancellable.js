/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
// 和执行可取消函数一模一样，注意题目要求立刻执行一次，然后间隔调用。
var cancellable = function (fn, args, t) {
  fn(...args);
  const id = setInterval(() => {
    fn(...args);
  }, t);
  return function () {
    clearInterval(id);
  };
};

/**
 *  const result = [];
 *
 *  const fn = (x) => x * 2;
 *  const args = [4], t = 35, cancelTimeMs = 190;
 *
 *  const start = performance.now();
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)});
 *  }
 *
 *  const cancel = cancellable(log, args, t);
 *
 *  setTimeout(cancel, cancelTimeMs);
 *
 *  setTimeout(() => {
 *      console.log(result); // [
 *                           //     {"time":0,"returned":8},
 *                           //     {"time":35,"returned":8},
 *                           //     {"time":70,"returned":8},
 *                           //     {"time":105,"returned":8},
 *                           //     {"time":140,"returned":8},
 *                           //     {"time":175,"returned":8}
 *                           // ]
 *  }, cancelTimeMs + t + 15)
 */
