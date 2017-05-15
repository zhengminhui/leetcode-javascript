/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 * Balanced tree: The left and right subtrees' heights differ by at most one, AND The left subtree is balanced, AND The right subtree is balanced；
 * Method1: From top to down; get depth of each node, and check by definition. Time O(n^2)
 * method2: from bottom up, DFS. time O(n).
 */
// var isBalanced = function(root) {
//     if(root === null) return true;
//     return Math.abs(getDepth(root.left) - getDepth(root.right)) <= 1 && 
//             isBalanced(root.left) && isBalanced(root.right);

// };

// var getDepth = function(root){
//     if(root === null) return 0;
//     return 1 + Math.max(getDepth(root.left), getDepth(root.right));
// };

// DFS
var isBalanced = function(root) {
    return dfsHeight(root) !== -1;
};

var dfsHeight = function(root) {
    if (root === null) return 0;
    var leftHeight = dfsHeight(root.left),
        rightHeight = dfsHeight(root.right);

    // definition of balanced tree    
    if (Math.abs(leftHeight - rightHeight) > 1) return -1;
    if (leftHeight === -1 || rightHeight === -1) return -1;


    // return height
    return 1 + Math.max(leftHeight, rightHeight);

};
