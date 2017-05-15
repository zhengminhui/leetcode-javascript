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
 * recursive: base: down to the leaf node, check if node.val equal to sum; else sum = sum - root.val and recursively find root.child 
 * iterate: use two stacks, sums to save updated sum, stack to save cur nodos; if reach leaf node and value equal sum, return true; else, update value push to sums, and push root.child to stack. we want to first down to left leaf, so we push root.right first.
 */
var hasPathSum = function(root, sum) {
    if(root === null) return false;
    // // recursive
    // if(root.left === null && root.right === null ) return sum === root.val;
    // return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
    
    // itertate
    var sums = [],
        stack = [],
        cur = root,
        value;
    sums.push(sum);
    stack.push(root);
    while(stack.length !== 0 && cur !== null){
        value = sums.pop();
        cur = stack.pop();
        
        if(cur.right === null && cur.left === null && cur.val === value) {
            return true;
        }
        // we want it down to leftmost first, so we push root.right first.
        if(cur.right !== null){
            sums.push(value - cur.val);
            stack.push(cur.right);
        }
        if(cur.left !== null){
            sums.push(value - cur.val);
            stack.push(cur.left);
        }
    }
    return false;
};