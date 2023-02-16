/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const res = [];

  function backtrack(start, target, combination) {
    if (target === 0) {
      res.push(Array.from(combination));
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      const cur = candidates[i];
      // 遇到比target 大，直接忽略。
      // 比如，push 进了 3个2，这个时候target 是1， 再push 2 的时候，就大于target了，所以这组组合不符合要求。
      if (cur > target) {
        continue;
      }
      // 否则用这个数
      combination.push(cur);
      backtrack(i, target - cur, combination);
      combination.pop();
    }
  }

  backtrack(0, target, []);
  return res;
};

const candidates = [2, 3, 6, 7];
const target = 7;
console.log(combinationSum(candidates, target));
