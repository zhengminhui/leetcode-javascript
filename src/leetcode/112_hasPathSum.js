/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 * recursive: base: down to the leaf node, check if node.val equal to sum; 
 * else sum = sum - root.val and recursively find root's children 
 * iterate: use two stacks, sums to save updated sum, stack to save cur nodes; 
 * if reach leaf node and value equal sum, return true; else, update value push to sums, 
 * and push root.child to stack. we want to first down to left leaf, so we push root.right first.
 */
var hasPathSum = function (root, sum) {
    if (!root) {
        return false;
    }
    // // recursive
    // if (root.left === null && root.right === null) {
    //     return sum === root.val;
    // }
    // return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);

    // itertate
    var nodeStack = [];
    var sumStack = [];
    // push to top
    nodeStack.push(root);
    sumStack.push(sum);
    while (nodeStack.length) {
        // pop from top
        var node = nodeStack.pop();
        var sum = sumStack.pop();
        if (node.left === null && node.right === null && sum === node.val) {
            return true;
        }
        // we want it down to leftmost first, so we push root.right first.
        if (node.right !== null) {
            nodeStack.push(node.right);
            sumStack.push(sum - node.val);
        }
        if (node.left !== null) {
            nodeStack.push(node.left);
            sumStack.push(sum - node.val);
        }
    }
    return false;
};