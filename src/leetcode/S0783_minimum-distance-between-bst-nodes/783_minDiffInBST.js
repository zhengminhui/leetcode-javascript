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
 * @return {number}
 */
// BST 的最小差值，只能在相邻两个数值中产生
// 注意不一定是相邻节点，有可能一个在左子树最右，一个在右子树最左。
// 中序遍历，有一个递增的数组，在递增数组中找差值，牺牲一点空间
var minDiffInBST = function (root) {
  if (!root) return 0;
  const arr = [];
  let min = Infinity;

  function dfs(root) {
    if (!root) return;
    const { val, left, right } = root;
    if (left) {
      dfs(left);
    }
    arr.push(val);
    if (right) {
      dfs(right);
    }
  }

  dfs(root);
  for (let i = 0; i < arr.length - 1; i++) {
    min = Math.min(min, arr[i + 1] - arr[i]);
  }
  return min;
};
