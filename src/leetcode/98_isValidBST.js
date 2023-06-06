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
 * @return {boolean}
 */
var isValidBST = function (root) {
  // stack iteration,
  // 用最小值去比较，然后更新最小值。
  // 没必要记录 order 数组，也没必要第二次遍历比较。
  if (!root) return true;
  const stack = [];
  let min = -Infinity;

  while (stack.length || root) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    // BST 中序遍历 一定是单调递增的
    if (root.val <= min) {
      return false;
    }
    min = root.val;
    root = root.right;
  }

  return true;
  // 递归
  // return checkRoot(root, -Infinity, Infinity);
};

function checkRoot(root, lower, upper) {
  if (!root) return true;
  if (root.val <= lower || root.val >= upper) {
    return false;
  }
  return (
    checkRoot(root.left, lower, root.val) &&
    checkRoot(root.right, root.val, upper)
  );
}
