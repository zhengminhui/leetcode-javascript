/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  if (root === null) return root;

  const curr = root.val;

  if (!root.left && !root.right) {
    const newRoot = new TreeNode(val);
    if (val < curr) {
      root.left = newRoot;
    } else {
      root.right = newRoot;
    }
    return root;
  }
  if (val < curr) {
    if (!root.left) {
      root.left = new TreeNode(val);
      return root;
    }
    insertIntoBST(root.left, val);
  } else {
    if (!root.right) {
      root.right = new TreeNode(val);
      return root;
    }
    insertIntoBST(root.right, val);
  }
  return root;
};
