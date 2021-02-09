/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

//iteration
var sumOfLeftLeaves = function(root) {
  if (!root) {
    return 0;
  }
  var sum = 0;
  var stack = [];
  stack.push(root);
  while (stack.length) {
    var node = stack.pop();
    if (node.left) {
      if (node.left.left === null && node.left.right === null) {
        sum += node.left.val;
      } else {
        stack.push(node.left);
      }
    }
    if (node.right) {
      if (node.right.left !== null || node.right.right !== null) {
        stack.push(node.right);
      }
    }
  }
  return sum;
};

// recursive
// var sumOfLeftLeaves = function(root) {
//   if (!root) return 0;
//   var sum = 0;
//   if (root.left) {
//     if (root.left.left === null && root.left.right === null) {
//       sum += root.left.val;
//     } else {
//       sum += sumOfLeftLeaves(root.left);
//     }
//   }
//   sum += sumOfLeftLeaves(root.right);
//   return sum;
// };
