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
// var convertBST = function(root) {
//   if (!root) return root;

//   let sum = 0;
//   let stack = [];
//   let curr = root;

//   while (stack.length || curr !== null) {
//     while (curr !== null) {
//       stack.push(curr);
//       curr = curr.right;
//     }
//     curr = stack.pop();
//     sum += curr.val;
//     curr.val = sum;
//     curr = curr.left;    
//   }

//   return root;
// };

var convertBST = function (root) {
  if (!root) return root;

  let sum = 0;
  const dfs = function (node) {
    if (node.right) dfs(node.right);
    sum += node.val;
    node.val = sum;
    if (node.left) dfs(node.left);
  }

  dfs(root);

  return root;
};
