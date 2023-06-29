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
 * @return {void} Do not return anything, modify root in-place instead.
 */
// 先拉平左右子树，然后把右子树衔接到左子树下方
// 0628：先把左子树挂在根的右边，再把右子树挂在新的最右下节点之后。
var flatten = function (root) {
  if (!root) return;
  // 递归分别展开左右子树
  flatten(root.left);
  flatten(root.right);

  // 把展开的链表暂存到两个变量
  const left = root.left;
  const temp = root.right;
  // 画图理解，root 的左边不要了，
  // 上面的左链表挂在 root 的右边，右边暂存
  root.left = null;
  root.right = left;

  // 开始处理保存的右链表
  // 让一个指针回到 root 节点，然后从头遍历到尾，把 temp(right) 接到队尾。
  // 为什么需要这么做？
  // 因为 p 先接了 left，要找到新的队尾。
  let p = root;
  while (p.right) {
    p = p.right;
  }
  p.right = temp;
};
