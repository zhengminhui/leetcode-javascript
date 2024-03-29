/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
  // 首先 dfs 遍历树，从大到小插入数组
  const res = dfs(root, []);
  return res[k - 1];
};

function dfs(root, arr) {
  if (!root) return null;

  if (root.right) {
    dfs(root.right, arr);
  }
  arr.push(root.val);
  if (root.left) {
    dfs(root.left, arr);
  }
  return arr;
}
