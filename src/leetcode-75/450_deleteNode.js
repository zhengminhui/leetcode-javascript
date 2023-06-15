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
 * @param {number} key
 * @return {TreeNode}
 */
// 找 root 是不是要的 key，如果是的，则把右孩子提上来。
var deleteNode = function (root, key) {
  if (!root) return null;

  if (root.val > key) {
    root.left = deleteNode(root.left, key);
  }
  if (root.val < key) {
    root.right = deleteNode(root.right, key);
  }
  if (root.val === key) {
    if (!root.left && !root.right) {
      return null;
    }
    if (!root.right) return root.left;
    if (!root.left) return root.right;

    let cur = root.right;
    while (cur.left) {
      cur = cur.left;
    }
    root.right = deleteNode(root.right, cur.val);
    cur.right = root.right;
    cur.left = root.left;
    return cur;
  }

  return root;
};
