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
 * @return {number[]}
 */
// 深度优先遍历，stack 解决。
var preorderTraversal = function (root) {
  if (!root) return [];

  const stack = [root];
  const res = [];
  while (stack.length) {
    const node = stack.pop();
    const { val, left, right } = node;
    res.push(val);
    if (right) {
      stack.push(right);
    }
    if (left) {
      stack.push(left);
    }
  }
  return res;
};
