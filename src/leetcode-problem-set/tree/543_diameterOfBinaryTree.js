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
// note0518: 在计算深度的过程中计算直径，最大直径 = 最大的左深度+最大的右深度，
// 注意这里的最大左右深度，可能是子树的，不一定穿过根节点。
// note0628: 要算最大直径，肯定要穷举左右节点，所以通过计算深度这个抓手。
var diameterOfBinaryTree = function (root) {
  let diameter = 0;

  function getDepth(root) {
    if (!root) return 0;
    const leftDep = getDepth(root.left);
    const rightDep = getDepth(root.right);
    diameter = Math.max(diameter, leftDep + rightDep);
    // 要调用leftDep 变量，否则会超时。
    return Math.max(leftDep, rightDep) + 1;
  }

  getDepth(root);
  return diameter;
};
