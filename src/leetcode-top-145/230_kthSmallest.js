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
 * @param {number} k
 * @return {number}
 */
// bst的中序遍历即是升序，记录一个序数rank，当rank 为k时，即是第k小的数。
var kthSmallest = function (root, k) {
  let res = -1;
  let rank = 0;

  function dfs(root, k) {
    if (!root) return;

    if (root) {
      dfs(root.left, k);
      rank++;
      const { val } = root;
      if (rank === k) {
        res = val;
        return;
      }
      dfs(root.right, k);
    }
  }

  dfs(root, k);
  return res;
};
