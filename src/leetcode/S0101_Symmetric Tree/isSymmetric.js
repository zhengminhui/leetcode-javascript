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
var isSymmetric1 = function (root) {
  if (!root) return true;

  const checkEqual = function (left, right) {
    if (left === null || right === null) return left === right;
    if (left.val !== right.val) return false;
    // has children
    return (
      checkEqual(left.left, right.right) && checkEqual(left.right, right.left)
    );
  };

  return checkEqual(root.left, root.right);
};

var isSymmetric2 = function (root) {
  if (!root) return true;
  const stack = [];
  stack.push(root.left);
  stack.push(root.right);

  while (stack.length) {
    const right = stack.pop();
    const left = stack.pop();
    if (left === null || right === null) {
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
