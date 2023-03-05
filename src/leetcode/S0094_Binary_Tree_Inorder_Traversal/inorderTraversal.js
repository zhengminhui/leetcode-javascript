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
 */
var inorderTraversal = function (root) {
  var stack = [];
  var order = [];

  if (!root) return order;

  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    order.push(root.val);
    root = root.right;
  }

  return order;
};

// recursive
// var inorderTraversal = function(root) {
//   var order = [];
//   helper(root, order);
//   return order;
// };

// var helper = function(root, order) {
//   if (root !== null) {
//     helper(root.left, order);
//     order.push(root.val);
//     helper(root.right, order);
//   }
// }
