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
 * pre-order: root -> root.left ->  root.right
 * if cur not null, push the value, check if has right child node, if so, save it in stack, then go to left child node. When reach the leftmost leaf, start to pop out right node from stack one by one.
 */
var preorderTraversal = function(root) {
    // // recursive 
    // var res = [];
    // recursiveHelper(root, res);
    // return res;

 // iteratively
    var res = [],
        stack = [],
        cur;
    cur = root;
    while(cur !== null){
        res.push(cur.val);
        if(cur.right !== null){
            stack.push(cur.right);
        }
        cur = cur.left;
        if(cur === null && stack.length !== 0){
            cur = stack.pop();
        }
    }
    return res;

};

// var recursiveHelper = function (root, res) {
//     if(root !== null){
//         res.push(root.val);
//         recursiveHelper(root.left, res);
//         recursiveHelper(root.right, res);
//     }
// };