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
 * @return {number[][]}
 */
// 层序遍历通常用 queue，先进先出。
// 判断这一行是正序还是逆序，用一个 count 标记。
var zigzagLevelOrder = function (root) {
  if (!root) return [];

  const res = [];
  const queue = [root];
  let count = 0;

  while (queue.length) {
    let len = queue.length;
    const level = [];

    while (len) {
      const { val, left, right } = queue.shift();
      level.push(val);
      if (left) {
        queue.push(left);
      }
      if (right) {
        queue.push(right);
      }
      len--;
    }
    if (count % 2) {
      res.push(level.reverse());
    } else {
      res.push(level);
    }
    count++;
  }
  return res;
};
