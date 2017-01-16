/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  var res = [];
  dfs(root, "", res);
  return res;
};

var dfs = function(root, path, res) {
  if (root === null) return;
  if (root.left === null && root.right === null) res.push(path + root.val);
  dfs(root.left, path + root.val + "->", res);
  dfs(root.right, path + root.val + "->", res);
};
