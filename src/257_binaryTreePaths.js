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
var binaryTreePaths = function (root) {
  // // recursive
  // var res = [];
  // dfs(root, '', res);
  // return res;

  if (!root) {
    return [];
  }
  var nodeStack = [];
  var strStack = [];
  var ans = [];
  nodeStack.push(root);
  strStack.push('');
  while (nodeStack.length) {
    var node = nodeStack.pop();
    var path = strStack.pop();
    if (node.left === null && node.right === null) {
      ans.push(path + node.val);
    }
    // we want the paths start from left
    if (node.right !== null) {
      nodeStack.push(node.right);
      strStack.push(path + node.val + '->');
    }
    if (node.left !== null) {
      nodeStack.push(node.left);
      strStack.push(path + node.val + '->');
    }
  }
  return ans;
};

var dfs = function (root, path, res) {
  if (!root) {
    return;
  }
  if (root.left === null && root.right === null) {
    return res.push(path + root.val);
  }
  dfs(root.left, path + root.val + '->', res);
  dfs(root.right, path + root.val + '->', res);
}