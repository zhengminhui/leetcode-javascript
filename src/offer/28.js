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
 */
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
 */
var isSymmetric = function (root) {
  if (!root) return true;
  let stack = [];
  stack.push(root.left);
  stack.push(root.right);
  while (stack.length) {
    const right = stack.pop();
    const left = stack.pop();
    if (right === null || left === null) {
      if (left !== right) {
        return false;
      }
      continue;
    }
    if (left.val !== right.val) {
      return false;
    }
    stack.push(left.left);
    stack.push(right.right);
    stack.push(left.right);
    stack.push(right.left);
  }
  return true;
};

// 递归
// var isSymmetric = function (root) {
//   if (!root) return true;
//   return isEqual(root.left, root.right);
// };

// var isEqual = function (left, right) {
//   if (left === null || right === null) return left === right;
//   if (left.val !== right.val) return false;
//   return isEqual(left.left, right.right) && isEqual(left.right, right.left);
// };
