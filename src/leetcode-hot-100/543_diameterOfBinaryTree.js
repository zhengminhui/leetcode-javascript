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
var diameterOfBinaryTree = function (root) {
  let diameter = 0;

  function getDepth(root) {
    if (!root) return 0;

    const leftDep = getDepth(root.left);
    const rightDep = getDepth(root.right);

    diameter = Math.max(diameter, leftDep + rightDep);
    // 这里不要想当然的写成 getDepth(root.left)，要调用leftDep 变量，否则会超时。
    return Math.max(leftDep, rightDep) + 1;
  }

  getDepth(root);

  return diameter;
};

const root = [
  1,
  2,
  3,
  4,
  5,
  null,
  null,
  6,
  null,
  7,
  null,
  8,
  null,
  9,
  null,
  null,
  null,
  10,
];
console.log(diameterOfBinaryTree(root));
