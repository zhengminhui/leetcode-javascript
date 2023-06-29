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
 * @param {number} val
 * @return {TreeNode}
 */
// 注意递归要 return fn，低级错误花好久 debug，天气太热了。
var searchBST = function (root, val) {
  if (!root) return null;
  const { left, right } = root;

  if (root.val === val) {
    return root;
  }
  if (root.val > val) {
    return searchBST(left, val);
  } else if (root.val < val) {
    return searchBST(right, val);
  }
};
