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

  let reverse = false;
  const order = [];
  const queue = [root];

  while (queue.length) {
    let len = queue.length;
    const level = [];
    while (len) {
      const node = queue.shift();
      if (reverse) {
        level.unshift(node.val);
      } else {
        level.push(node.val);
      }

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }

      len -= 1;
    }
    reverse = !reverse;
    order.push(level);
  }

  return order;
};
