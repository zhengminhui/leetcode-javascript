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
 * post-order: root.left -> root.right -> root
 * Use stack to save root.left and right.And every time unshift val to the res, so that make it post order. 
 */
var postorderTraversal = function(root) {
    var res = [],
        stack = [],
        cur = root;
    if (root === null) return [];
    stack.push(cur);
    while (stack.length !== 0) {
        cur = stack.pop();
        res.unshift(cur.val);
        if (cur.left !== null) {
            stack.push(cur.left);
        }
        if (cur.right !== null) {
            stack.push(cur.right);
        }
    }
    return res;

    // var res = [];
    // postorderHelper(root, res);
    // return res;
};

// var postorderHelper = function (root, res){
//     if(root !== null){
//         postorderHelper(root.left, res);
//         postorderHelper(root.right, res);
//         res.push(root.val);
//     }
// };