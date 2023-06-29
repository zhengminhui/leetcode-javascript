/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// 递归做法，思路类似两个变量互换。
var invertTree = function (root) {
  if (!root) return null;

  invertTree(root.left);
  invertTree(root.right);

  const tmp = root.left;
  root.left = root.right;
  root.right = tmp;
  return root;
};
