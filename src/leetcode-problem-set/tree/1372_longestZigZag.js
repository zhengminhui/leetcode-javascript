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
 * @return {number}
 */
// 递归 dfs，如果有左孩子，就继续往左走，用 r+1，更新为 l 的值。同时在遍历的过程中更新 max。
var longestZigZag = function (root) {
  let max = 0;

  function dfs(node, l, r) {
    max = Math.max(max, l, r);
    if (node.left) {
      dfs(node.left, r + 1, 0);
    }
    if (node.right) {
      dfs(node.right, 0, l + 1);
    }
  }

  dfs(root, 0, 0);
  return max;
};
