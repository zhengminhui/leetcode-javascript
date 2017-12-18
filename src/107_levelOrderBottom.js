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
var levelOrderBottom = function (root) {
  if (!root) {
    return [];
  }
  var ans = [];
  var queue = [];
  // enqueue to the left
  queue.unshift(root);
  while (queue.length) {
    var size = queue.length;
    var level = []
    for (var i = 0; i < size; i++) {
      // dequeue from the right
      var node = queue.pop();
      level.push(node.val);
      if (node.left) {
        queue.unshift(node.left);
      }
      if (node.right) {
        queue.unshift(node.right);
      }
    }
    ans.unshift(level);
  }
  return ans;
};