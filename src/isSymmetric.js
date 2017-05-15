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
 * recurrsively: If not root, return true. Else check root.left and root.right. In the helper function, if left node or right node is null, check if they are equal. Else if the vals not match, return false. Finally check its child nodes.
 * Iteratively: Use a stack to store root.left and root.right. And push [left.left,right.right] and [left.right, right.left] in pairs(if they exist). Then check if their val are equal.
 */
// // reccursive
// var isSymmetric = function(root) {
//     return root === null || isSymmetricHelper(root.left, root.right);
// };

// var isSymmetricHelper = function(left, right) {
//     if (left === null || right === null) {
//         return left === right;
//     }
//     if (left.val !== right.val) {
//         return false;
//     }
//     return isSymmetricHelper(left.right, right.left) && isSymmetricHelper(left.left, right.right);
// };

// iterate
var isSymmetric = function(root) {
    var left, right;
    if (root === null) return true;
    var stack = [];
    if (root.left !== null) {
        if (root.right === null) {
            return false;
        } else {
            stack.push(root.left);
            stack.push(root.right);
        }
    } else if (root.right !== null) {
        return false;
    }

    while (stack.length !== 0) {
        right = stack.pop();
        left = stack.pop();
        if (left.val !== right.val) return false;
        if (left.left !== null) {
            if (right.right === null) {
                return false;
            } else {
                stack.push(left.left);
                stack.push(right.right);
            }
        } else if (right.right !== null) {
            return false;
        }

        if (left.right !== null) {
            if (right.left === null) {
                return false;
            } else {
                stack.push(left.right);
                stack.push(right.left);
            }
        } else if (right.left !== null) {
            return false;
        }
    }
    return true;

};