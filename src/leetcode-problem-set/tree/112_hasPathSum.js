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
 * @return {boolean}
 */
// dfs 递归，每次递的过程，更新 target
// 成功的条件是 target 为 0，并且没有左右节点了，到底了，才行。
var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  return recur(root, targetSum);
};

function recur(root, target) {
  if (!root) return false;

  const { val, left, right } = root;
  target -= val;

  if (!target && !left && !right) {
    return true;
  }

  return recur(left, target) || recur(right, target);
}
