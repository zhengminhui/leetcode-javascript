/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  if (!n) return [];
  return build(1, n);
};

function build(low, high) {
  const res = [];
  if (low > high) {
    res.push(null);
    return res;
  }

  for (let i = low; i <= high; i++) {
    const left = build(low, i - 1);
    const right = build(i + 1, high);

    for (const l of left) {
      for (const r of right) {
        const root = new TreeNode(i);
        root.left = l;
        root.right = r;
        res.push(root);
      }
    }
  }
  return res;
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

console.log(generateTrees(2));
