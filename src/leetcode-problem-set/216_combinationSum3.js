/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
// 一定要 k 个不同的正整数，加和等于 n
var combinationSum3 = function (k, n) {
  const res = [];
  const cbt = [];
  function backtrack(start, target) {
    // 剪枝，减少运行次数，当 target 成负数时，没必要再继续走下去。
    if (target < 0) {
      return;
    }

    if (cbt.length === k) {
      if (target === 0) {
        res.push(cbt.slice());
        return;
      }
    }
    for (let i = start; i < 10; i++) {
      cbt.push(i);
      backtrack(i + 1, target - i);
      cbt.pop();
    }
  }
  backtrack(1, n);
  return res;
};
