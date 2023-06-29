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
 * @return {number}
 */
// maxSum 的初始值要是 负无穷，节点可能是负数。
// 对空间没要求，就把层和都存起来，有要求，就用一个负无穷初始化，更大就更新这个变量。
var maxLevelSum = function (root) {
  if (!root) return 0;

  let maxLevel = 0;
  let maxSum = -Infinity;
  let level = 0;
  const queue = [root];
  while (queue.length) {
    let len = queue.length;
    level++;
    let sum = 0;
    while (len) {
      const { left, right, val } = queue.shift();
      sum += val;
      if (left) {
        queue.push(left);
      }
      if (right) {
        queue.push(right);
      }
      len--;
    }
    if (sum > maxSum) {
      maxLevel = level;
      maxSum = sum;
    }
  }
  return maxLevel;
};
