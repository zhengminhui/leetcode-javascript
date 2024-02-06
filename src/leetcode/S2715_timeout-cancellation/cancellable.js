/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
// 题目意思分两部分，
// 1. fn 会在 t 时间后执行，如果执行了，就返回 fn(...args), 很好操作，
// 通过 settimeout 在 t 秒后执行
// 2. 还有另外一个 cancelTimeMs, 是题目自带的测试方法的参数，
// 如果 t 时间大于 cancelTimeMs，则返回 []
// 怎么判断大小，还是题目自带的测试方法，也用了一个 settimeout,
// 如何理解呢。如果大于 c 时间，则取消掉 t 时间内跑完的 timeout，实现题目的要求。
// 所以能走到 return clear，说明 t 大于 cancel 时间。
// 极端法理解，如果 c 时间无限大，则 cancellable 方法经历了t时间后触发 fn, 然后clearTimeout.
// 如果 c 时间无穷小，则 cancellable 出师未捷身先死，还没到 t 时间，就 clearTimeout，完成了取消操作。
var cancellable = function (fn, args, t) {
  const id = setTimeout(() => {
    fn(...args);
  }, t);
  return function () {
    clearTimeout(id);
  };
};

/**
 *  const result = [];
 *
 *  const fn = (x) => x * 5;
 *  const args = [2], t = 20, cancelTimeMs = 50;
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
 *  const maxT = Math.max(t, cancelTimeMs);
 *
 *  setTimeout(cancel, cancelTimeMs);
 *
 *  setTimeout(() => {
 *      console.log(result); // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */
