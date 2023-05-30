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
// 思路来自按层级打印二叉树，记录没层级的最后一个值，即右视图。
// queue 是保存 node，先进先出，所以用 shift
// level 是保存 value
var rightSideView = function (root) {
  if (!root) return [];

  const queue = [root];
  const res = [];
  while (queue.length) {
    let len = queue.length;
    const level = [];
    while (len) {
      const node = queue.shift();
      const { left, right, val } = node;
      level.push(val);
      if (left) {
        queue.push(left);
      }
      if (right) {
        queue.push(right);
      }
      len--;
    }
    res.push(level[level.length - 1]);
  }
  return res;
};
