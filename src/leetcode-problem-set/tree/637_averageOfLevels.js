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
// 层序遍历变体，和zigzag 打印一样，记录 sum，然后求平均。
var averageOfLevels = function (root) {
  if (!root) return [0];
  const queue = [root];
  const res = [];
  while (queue.length) {
    const len = queue.length;
    let sum = 0;
    let i = 0;
    while (i < len) {
      const { left, right, val } = queue.shift();
      sum += val;
      if (left) {
        queue.push(left);
      }
      if (right) {
        queue.push(right);
      }
      i++;
    }
    res.push(sum / len);
  }
  return res;
};
