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
// 思路来自按层级打印二叉树，记录每层级的最后一个值，即右视图。
// queue 是保存 node，先进先出，所以用 shift
// 0615：不用每层都保存，判断 index 是 len -1 时直接 push 进 res
var rightSideView = function (root) {
  if (!root) return [];

  const queue = [root];
  const res = [];
  while (queue.length) {
    const len = queue.length;

    for (let i = 0; i < len; i++) {
      const { left, right, val } = queue.shift();
      if (left) {
        queue.push(left);
      }
      if (right) {
        queue.push(right);
      }
      if (i === len - 1) {
        res.push(val);
      }
    }
  }
  return res;
};
