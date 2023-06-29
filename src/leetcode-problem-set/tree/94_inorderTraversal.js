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
// 和检查二叉树思路一样。
// bst中序遍历就是从小到大的排列的顺序。
var inorderTraversal = function (root) {
  if (!root) return [];
  const stack = [];
  const res = [];
  while (root || stack.length) {
    // 先到最左叶子节点
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    res.push(root.val);
    root = root.right;
  }
  return res;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversalRecur = function (root) {
  const res = [];
  recur(root);

  function recur(node) {
    if (!node) return null;
    recur(node.left);
    res.push(node.val);
    recur(node.right);
  }
  return res;
};
