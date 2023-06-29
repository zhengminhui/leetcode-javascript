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
  // stack iteration, dfs 到左下角
  // 用最小值去比较，然后更新最小值。
  // 没必要记录 order 数组，也没必要第二次遍历比较。
  if (!root) return true;
  const stack = [];
  let min = -Infinity;

  while (stack.length || root) {
    // 先到最左叶子节点
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
};

// 递归的方法，传入无穷大无穷小，开始依次检查左右孩子节点。
// 对于左子树，自身是 upper bound，对于右子树，自身是 lower bound
var isValidBSTRecur = function (root) {
  return checkRoot(root, -Infinity, Infinity);
};

function checkRoot(root, lower, upper) {
  if (!root) return true;
  const { val, left, right } = root;
  if (val <= lower || val >= upper) {
    return false;
  }
  return checkRoot(left, lower, val) && checkRoot(right, val, upper);
}
