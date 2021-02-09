/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
  if (!preorder.length) return null;

  const val = preorder[0];
  const root = new TreeNode(val);

  const leftChildren = [];
  const rightChildren = [];

  let i = 1;
  while (i < preorder.length) {
    const curr = preorder[i];
    if (curr < root.val) {
      leftChildren.push(curr);
    } else {
      rightChildren.push(curr);
    }
    i++;
  }

  root.left = bstFromPreorder(leftChildren);
  root.right = bstFromPreorder(rightChildren);
  return root;
};
