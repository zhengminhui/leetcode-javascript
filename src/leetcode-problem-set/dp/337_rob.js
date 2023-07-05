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
// 分成两种情况，不抢 root, 抢 root
// base case: root is null, return [0,0]
// 状态转移方程：
// robRoot = root.val + 不抢左节点+ 不抢右节点;
// notRobRoot= max(抢左节点，不抢左节点)+max(抢右节点，不抢右节点)
var rob = function (root) {
  const res = dp(root);
  return Math.max(...res);
};

function dp(root) {
  if (!root) return [0, 0];
  const left = dp(root.left);
  const right = dp(root.right);
  const robRoot = root.val + left[0] + right[0];
  const notRobRoot = Math.max(...left) + Math.max(...right);
  return [notRobRoot, robRoot];
}
