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
var maxPathSum = function (root) {
  let maxSum = -Infinity;

  function dfs(root) {
    if (root === null) {
      return 0;
    }
    const { val } = root;
    const left = dfs(root.left);
    const right = dfs(root.right);

    // 当前节点为根的子树 的 路径和
    const innerMaxSum = left + val + right;
    maxSum = Math.max(maxSum, innerMaxSum);

    // 当前节点 能对外提供的 最大和
    // 0526note：这里卡了很久，为什么 max（0，左，右）因为路径要么选左，要么选右，要么不选，三选一。
    const outputMaxSum = val + Math.max(0, left, right);

    // 如果对外提供的路径和为负，直接返回0。否则正常返回
    return outputMaxSum < 0 ? 0 : outputMaxSum;
  }

  dfs(root);

  return maxSum;
};
