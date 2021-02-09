/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 * Given this is a BST so we can use the feature to solve this problem.
 * All the smaller node are at the left hand side of root and all the larger 
 * node are at the right hand side.
 * So if p and q are smaller than root, we keep finding them at root.left, otherwise 
 * we find them at root.right. If one is larger than root and the other is smaller,
 * then the root would be LCA.
 * Since it binary search, the
 * Time O(n) (Space O(1) don't consider recursive.)
 * 
 */
var lowestCommonAncestor = function(root, p, q) {
    if (root === null || p === null || q === null) {
        return null;
    }
    return helper(root, p, q);
};

function helper(root, p, q) {
    if (p.val < root.val && q.val < root.val) {
        return helper(root.left, p, q);
    } else if (p.val > root.val && q.val > root.val) {
        return helper(root.right, p, q);
    } else {
        return root;
    }
}
