/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
//  bfs queue
var levelOrder = function (root) {
  if (!root) return [];
  const queue = [root];
  const order = [];

  while (queue.length) {
    const node = queue.shift();
    order.push(node.val);

    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }

  return order;
};
