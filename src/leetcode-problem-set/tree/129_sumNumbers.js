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
// 0629 dfs 有点感觉了，mid 一把过
var sumNumbers = function (root) {
  let res = 0;

  function dfs(node, str) {
    if (!node) return;
    const { val, left, right } = node;
    str += '' + val;
    // 当到叶子节点时，开始转换
    if (!left && !right) {
      res += parseInt(str, 10);
    }
    dfs(node.left, str);
    dfs(node.right, str);
  }

  dfs(root, '');
  return res;
};
