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
  return Math.abs(getDepth(root.left) - getDepth(root.right)) <= 1
        && isBalanced(root.left) && isBalanced(root.right);
};

var getDepth = function (root) {
  if (!root) return 0;
  return 1 + Math.max(getDepth(root.left), getDepth(root.right));
};
