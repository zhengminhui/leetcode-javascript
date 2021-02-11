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
  const stack = [];
  // 首先 dfs 遍历树，从大到小插入数组
  dfs(root, stack);
  return stack[k - 1];
};

// reverse post oder traversal
function dfs(root, arr) {
  if (!root) return null;
  dfs(root.right, arr);
  arr.push(root.val);
  dfs(root.left, arr);
}
