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
var hasPathSum = function (root, targetSum) {
  if (!root) return false;

  return recur(root, targetSum);
};

function recur(root, target) {
  if (!root) return false;

  target -= root.val;

  if (!target && !root.left && !root.right) {
    return true;
  }

  return recur(root.left, target) || recur(root.right, target);
}
