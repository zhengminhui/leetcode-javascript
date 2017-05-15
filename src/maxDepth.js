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
 var  maxDepth = function(root) {
    if (root === null) {
      return 0;
  }
    // else if (root.left === null){
    //     return 1 + maxDepth(root.right);
    // } 
    // else if (root.right === null){
    //     return 1 + maxDepth(root.left);
    // } 
    // else {
    //     return 1+Math.max(maxDepth(root.right),maxDepth(root.left));
    // }

    return 1 + Math.max(maxDepth(root.right), maxDepth(root.left));
};
