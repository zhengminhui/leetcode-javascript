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
// dfs 递归，记录当前的 curmax，传入递归函数。
var goodNodes = function (root) {
  if (!root) return 0;
  let res = 0;

  function dfs(node, curMax) {
    const { left, right, val } = node;
    if (val >= curMax) {
      res++;
      curMax = val;
    }
    if (left) {
      dfs(left, curMax);
    }
    if (right) {
      dfs(right, curMax);
    }
  }

  dfs(root, root.val);
  return res;
};
