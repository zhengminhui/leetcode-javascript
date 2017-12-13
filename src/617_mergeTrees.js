/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 * t1 && t1.left
 * if both true, will return latter(t1.left)
 * if t1 is falsy return t1
 */
var mergeTrees = function(t1, t2) {
  if (!t1 && !t2) return null;
  var root = new TreeNode((t1 ? t1.val : 0) + (t2 ? t2.val : 0));
  root.left = mergeTrees(t1 && t1.left, t2 && t2.left);
  root.right = mergeTrees(t1 && t1.right, t2 && t2.right);
  return root;
};
