/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
// 假想成一棵三叉树，来解决连接中间间隙的问题。
// 这题不是题库里的，但是也放进来一起整理。
var connect = function (root) {
  if (!root) return null;
  traverse(root.left, root.right);
  return root;
};

function traverse(node1, node2) {
  // 如果有一方为空，则不进行操作。没地方连。
  if (!node1 || !node2) return;

  node1.next = node2;

  traverse(node1.left, node1.right);
  traverse(node2.left, node2.right);
  // 连接左树右子 和 右树左子
  traverse(node1.right, node2.left);
}
