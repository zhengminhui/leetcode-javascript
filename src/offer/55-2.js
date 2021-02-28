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
 * Balanced tree: The left and right subtrees' heights differ by at most one,
 * AND The left subtree is balanced, AND The right subtree is balanced；
 * Method1: From top to down; get depth of each node, and check by definition. Time O(n^2)
 */
var isBalanced = function (root) {
  if (!root) return true;
  return (
    isBalanced(root.left) &&
    isBalanced(root.right) &&
    Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1
  );
};

var getHeight = function (root) {
  if (!root) return 0;
  return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
};
