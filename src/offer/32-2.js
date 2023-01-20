/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];

  const order = [];
  const queue = [root];

  while (queue.length) {
    const level = [];
    // 通过 len 来记录当前层级的长度，从而保证后面 enqueue 的，下一次再打印
    let len = queue.length;
    while (len) {
      const node = queue.shift();
      level.push(node.val);

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      len -= 1;
    }
    order.push(level);
  }

  return order;
};
