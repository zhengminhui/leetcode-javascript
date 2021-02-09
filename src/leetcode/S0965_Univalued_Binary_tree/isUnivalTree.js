/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function (root) {
  if (root === null) return true;
  if (root.left && root.left.val !== root.val) return false;
  if (root.right && root.right.val !== root.val) return false;
  return isUnivalTree(root.left) && isUnivalTree(root.right);
};
