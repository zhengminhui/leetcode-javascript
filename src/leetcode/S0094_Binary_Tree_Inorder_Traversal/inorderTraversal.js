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
var inorderTraversal = function(root) {
  var curr = null;
  var stack = [];
  var order = [];

  if (!root) return order;
  curr = root;
  while (curr !== null || stack.length !== 0) {
    while (curr !== null) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    order.push(curr.val);
    curr = curr.right;
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
