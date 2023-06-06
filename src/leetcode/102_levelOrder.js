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
// 关键点在于，通过数组长度，记住当前层级有多少个节点
var levelOrder = function (root) {
  if (!root) return [];

  const queue = [root];
  const order = [];

  while (queue.length) {
    const level = [];
    let len = queue.length;
    while (len) {
      const node = queue.shift();
      const { val, left, right } = node;
      level.push(val);
      if (left) {
        queue.push(left);
      }
      if (right) {
        queue.push(right);
      }
      len -= 1;
    }
    order.push(level);
  }
  return order;
};
