/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// 如果任意一个是 null，要保证两个相同
// 如果值不同，返回 false，然后递归检查左右子树。
var isSameTree = function (p, q) {
  if (!p || !q) {
    return p === q;
  }
  if (p.val !== q.val) {
    return false;
  }
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
