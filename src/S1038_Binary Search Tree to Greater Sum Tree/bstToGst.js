/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// dfs from right most node, then each node add the previous summation
// reversed in order sequence
// var bstToGst = function(root) {
//   if(!root) return root;
//   let sum = 0;

//   var dfs = function(node) {
//     if(node.right) dfs(node.right);
//     node.val += sum;
//     sum = node.val;
//     if(node.left) dfs(node.left);
//   }

//   dfs(root);

//   return root;
// };

var bstToGst = function (root) {
  if (!root) return root;
  let sum = 0;
  let curr = root;
  let stack = [];
  // outter while condition: 
  // curr could be null because curr.left may not exist
  // in that case, need to use stack length to check if node still need to be iterated
  while (curr !== null || stack.length) {
    // Inner while to find the right most node 
    while (curr !== null) {
      stack.push(curr);
      curr = curr.right;
    }
    // when curr is null, start to pop node
    curr = stack.pop();
    sum += curr.val;
    curr.val = sum;
    curr = curr.left;
  }

  return root;
};
