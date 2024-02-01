/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    const v = arr[i];
    if (fn(v, i)) {
      res.push(v);
    }
  }
  return res;
};
