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
 * @return {number}
 */
// https://leetcode.cn/problems/binary-tree-maximum-path-sum/solutions/297276/shou-hui-tu-jie-hen-you-ya-de-yi-dao-dfsti-by-hyj8/
var maxPathSum = function (root) {
  let maxSum = -Infinity;

  function dfs(root) {
    if (root == null) {
      return 0;
    }
    const left = dfs(root.left);
    const right = dfs(root.right);

    // 当前子树内部的最大路径和
    const innerMaxSum = left + root.val + right;
    maxSum = Math.max(maxSum, innerMaxSum);

    // 当前子树对外提供的最大和
    const outputMaxSum = root.val + Math.max(0, left, right);

    // 如果对外提供的路径和为负，直接返回0。否则正常返回
    return outputMaxSum < 0 ? 0 : outputMaxSum;
  }

  dfs(root);

  return maxSum;
};
