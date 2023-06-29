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
// 迭代，两两入栈。递归，分别传入。
// 和100相同的树类似。
var isSymmetric = function (root) {
  if (!root) return true;
  const stack = [root.left, root.right];
  // 一次入栈一对，再弹出一对
  while (stack.length) {
    const right = stack.pop();
    const left = stack.pop();
    // one of nodes is null
    if (!right || !left) {
      if (right !== left) {
        return false;
      }
      // 如果两个都是null，则继续到下一轮检查。
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

// 递归做法。
var isSymmetricRecur = function (root) {
  if (!root) return true;
  const { left, right } = root;
  if (!left || !right) {
    return left === right;
  }
  if (left.val !== right.val) {
    return false;
  }
  return isSame(left, right);
};

var isSame = function (p, q) {
  if (!p || !q) {
    return p === q;
  }
  if (p.val !== q.val) {
    return false;
  }
  return isSame(p.left, q.right) && isSame(p.right, q.left);
};
