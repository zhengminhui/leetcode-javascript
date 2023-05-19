/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 * Iteratively: Use a stack and push [left.left,right.right] and [left.right, right.left] in pairs
 */
// 0519: 两两入栈。
var isSymmetric = function (root) {
  if (!root) return true;
  const stack = [root.left, root.right];
  // 一次入栈一对，再弹出一对
  while (stack.length) {
    const right = stack.pop();
    const left = stack.pop();
    // one of nodes is null
    if (right === null || left === null) {
      if (right !== left) {
        return false;
      }
      continue;
    }
    if (right.val !== left.val) return false;

    stack.push(left.left);
    stack.push(right.right);
    stack.push(left.right);
    stack.push(right.left);
  }
  return true;
};
