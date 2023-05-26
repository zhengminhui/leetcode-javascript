/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
// HashMap的key是前缀和， value是该前缀和的节点数量
var pathSum = function (root, targetSum) {
  const prefixMap = new Map();
  let ans = 0;
  recur(root, 0);

  function recur(root, curSum) {
    if (!root) {
      return 0;
    }
    if (prefixMap.has(curSum)) {
      prefixMap.set(curSum, prefixMap.get(curSum) + 1);
    } else {
      prefixMap.set(curSum, 1);
    }
    const target = curSum + root.val;
    const diff = target - targetSum;
    ans += prefixMap.get(diff) || 0;
    // 继续找
    recur(root.left, target);
    recur(root.right, target);
    // 回溯 撤销
    prefixMap.set(curSum, prefixMap.get(curSum) - 1);
  }

  return ans;
};
