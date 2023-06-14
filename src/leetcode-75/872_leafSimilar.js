/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
// dfs 遍历树，用数组记录最下面一层，然后比较返回的叶子数组的值。
var leafSimilar = function (root1, root2) {
  const a = getLeafLevel(root1);
  const b = getLeafLevel(root2);
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
};

function getLeafLevel(root) {
  const leaf = [];
  const arr = [root];

  while (arr.length) {
    const node = arr.pop();
    if (node.right) {
      arr.push(node.right);
    }
    if (node.left) {
      arr.push(node.left);
    }
    if (!node.left && !node.right) {
      leaf.push(node.val);
    }
  }

  return leaf;
}
