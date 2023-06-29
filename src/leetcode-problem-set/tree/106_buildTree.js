/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
// 和前一题一模一样，就是通过后续的最后一位找 root 节点。
// 画一下数组的图。后序的最后一个是 root，然后再中序去找对应的 index
// 然后把中序按 左，root， 右切分。
// 然后把后续按，左的长度，右的长度，root 切分，然后递归拼接。
var buildTree = function (inorder, postorder) {
  const val = postorder[postorder.length - 1];
  if (val === undefined) return null;

  const index = inorder.indexOf(val);

  const inLeft = inorder.slice(0, index);
  const inRight = inorder.slice(index + 1);

  const postLeft = postorder.slice(0, inLeft.length);
  const postRight = postorder.slice(inLeft.length, postorder.length - 1);

  const node = new TreeNode(val);
  node.left = buildTree(inLeft, postLeft);
  node.right = buildTree(inRight, postRight);

  return node;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
