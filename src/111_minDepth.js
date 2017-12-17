/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 * Since it requires down to the leaf node,
 * so we need to add a determination if left node or right node is null,
 * then go to max(left, right).
 */
var minDepth = function(root) {
  if (!root) {
    return 0;
  }
  if (root.left === null || root.right === null) {
    return 1 + Math.max(minDepth(root.left), minDepth(root.right));
  } else {
    return 1 + Math.min(minDepth(root.left), minDepth(root.right));
  }
};
