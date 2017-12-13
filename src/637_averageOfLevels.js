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
 * BFS, use queue's size to determine the number of node each level
 */
var averageOfLevels = function(root) {
  var res = [];
  if (!root) {
    return [];
  }
  var queue = [];
  queue.push(root);
  while (queue.length) {
    var size = queue.length;
    var sum = 0;
    for (var i = 0; i < size; i++) {
      var node = queue.shift();
      sum += node.val;
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    var avg = sum / size;
    res.push(avg);
  }
  return res;
};
