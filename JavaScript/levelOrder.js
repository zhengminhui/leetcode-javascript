/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 * BFS Queue
 */
var levelOrder = function(root) {
    var res = [],
        queue = [],
        len = 0,
        cur = root;

    if (root === null) return res;
    queue.push(cur);

    while (queue.length !== 0) {
        var level = [];
        len = queue.length;
        for (var i = 0; i < len; i++) {
            cur = queue.shift();
            level.push(cur.val);
            if (cur.left !== null) {
                queue.push(cur.left);
            }
            if (cur.right !== null) {
                queue.push(cur.right);
            }
        }
        res.push(level);
    }
    return res;
};
