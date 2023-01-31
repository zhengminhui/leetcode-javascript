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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  if (!root) return [];

  const res = [];
  const path = [];

  recur(root, targetSum, path, res);
  return res;
};

function recur(root, target, path, res) {
  if (!root) return;

  path.push(root.val);
  target -= root.val;

  if (!target && !root.left && !root.right) {
    res.push(path.slice());
  }
  recur(root.left, target, path, res);
  recur(root.right, target, path, res);
  path.pop();
}
