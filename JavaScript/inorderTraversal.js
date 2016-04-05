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
 * in-order: root.left -> root -> root.right
 * Use two stacks, use res to save values and use stack to save root; First down to leftmost node till it's null so jump out of the loop, then pop out the parent node(cur), push the value to res. Then turn to cur.right.
 */
var inorderTraversal = function(root) {
    var res = [],
        stack = [],
        cur;
    if (!root) return [];
    cur = root;
    // add stack.length !== 0 is because of the situation that root.right is null
    while (cur !== null || stack.length !== 0) {
        while (cur !== null) {
            stack.push(cur);
            cur = cur.left;
        }
        cur = stack.pop();
        res.push(cur.val);
        cur = cur.right;
    }
    return res;

    // // recursively
    // var res = [];
    // recursiveHelper(root, res);
    // return res;

};

// var recursiveHelper = function(root, res) {
//     if (root !== null) {
//         recursiveHelper(root.left, res);
//         res.push(root.val);
//         recursiveHelper(root.right, res);
//     }
// };