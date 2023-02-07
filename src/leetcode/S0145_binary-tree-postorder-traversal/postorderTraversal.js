/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// post-order: root.left -> root.right -> root
// Use stack to save root.left and right.
// And every time unshift val to the res, so that make it post order.
var postorderTraversal = function (root) {
  if (!root) return [];
  const res = [];
  const stack = [];
  stack.push(root);
  while (stack.length) {
    const cur = stack.pop();

    if (cur.left) {
      stack.push(cur.left);
    }
    if (cur.right) {
      stack.push(cur.right);
    }
    res.unshift(cur.val);
  }
  return res;
};

const postorderTraversalRecursion = function (root) {
  if (!root) return [];
  const res = [];
  recur(root, res);
  return res;
};

function recur(root, arr) {
  if (root) {
    recur(root.left, arr);
    recur(root.right, arr);
    console.log(root.val);
    arr.push(root.val);
  }
}
