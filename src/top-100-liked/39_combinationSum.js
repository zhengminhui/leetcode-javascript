/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const res = [];
  const path = [];

  function backtracking(index, target, path) {
    if (target === 0) {
      res.push(Array.from(path));
      return;
    }

    for (let i = index; i < candidates.length; i++) {
      const cur = candidates[i];
      if (cur > target) {
        continue;
      }
      path.push(cur);
      backtracking(i, target - cur, path);
      path.pop();
    }
  }

  backtracking(0, target, path);
  return res;
};
