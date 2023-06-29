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
// 只有最底层不满，通过 dfs 遍历肯定可以算出结果。但是这样遍历的全部节点，不够高效。
// 通过计算高度的方式，可以节省时间。
var countNodes = function (root) {
  if (!root) return 0;

  let leftH = 0;
  let rightH = 0;
  let leftNode = root;
  let rightNode = root;

  // 计算左子树的高度，因为左边肯定是填满的。
  while (leftNode) {
    leftH++;
    leftNode = leftNode.left;
  }
  // 计算右侧高度
  while (rightNode) {
    rightH++;
    rightNode = rightNode.right;
  }

  // 满二叉树, 两层的 2^2 -1 =3， 三层的 2^3 -1=7.
  if (leftH === rightH) {
    return 2 ** leftH - 1;
  }
  // 不满的通过递归计算
  return 1 + countNodes(root.left) + countNodes(root.right);
};
