/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  const memo = new Array(n + 1);
  for (let i = 0; i < n + 1; i++) {
    memo[i] = new Array(n + 1).fill(0);
  }
  // 返回从low 到 high 闭区间范围内的所有 bst 数量
  // 假设 n = 5, 以 3 为 root
  // left 有，1，2 ；2，1两种情况
  // right 有 3,4；4,3 两种情况。
  // 相乘得到 4 中情况。
  // 分别计算以 1,2,3,4,4 的情况加和。
  function count(low, high) {
    // 不存在这种情况，返回 null 节点，也是一种情况。
    if (low > high) return 1;

    if (memo[low][high] !== 0) {
      return memo[low][high];
    }
    let res = 0;
    for (let i = low; i <= high; i++) {
      // i 的值作为根节点 root (3)
      // left (1,2) right (4,5)
      const left = count(low, i - 1);
      const right = count(i + 1, high);
      res += left * right;
    }
    memo[low][high] = res;
    return res;
  }
  return count(1, n);
};

const n = 3;
console.log(numTrees(n));
