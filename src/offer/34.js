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
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function (root, target) {
  if (!root) return [];

  const res = [];
  const path = [];
  recur(root, target, path, res);
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
  // 到叶子节点了，这是要删掉最后一个节点，返回到上一层及，才能继续
  path.pop();
}
