/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
// 题目挺唬人的，讲的不清楚。
// 就是说 fn 就是 comparator，按照 fn 处理过的结果排序。
var sortBy = function (arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
};
