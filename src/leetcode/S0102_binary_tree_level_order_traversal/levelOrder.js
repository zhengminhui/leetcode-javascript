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
 * BFS Queue
 */
var levelOrder = function (root) {
  if (!root) return [];

  const order = [];
  const queue = [];
  queue.push(root);

  while (queue.length) {
    let level = [];
    len = queue.length;
    for (let i = 0; i < len; i++) {
      cur = queue.shift();
      level.push(cur.val);
      if (cur.left) {
        queue.push(cur.left);
      }
      if (cur.right) {
        queue.push(cur.right);
      }
    }
    order.push(level);
  }
  return order;
};
