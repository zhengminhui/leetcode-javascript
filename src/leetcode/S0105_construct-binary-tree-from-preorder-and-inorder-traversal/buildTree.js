/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 * 前序： 根，左，右
 * 中序： 左，中，右
 * 根据前序，找到root，根据root的值在中序找到对应的index，
 * 将数组分为左和右两部分
 */
var buildTree = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) {
    return null;
  }
  const val = preorder[0];
  const index = inorder.indexOf(val);

  //  index 为界，inorder左部分
  const inLeft = inorder.slice(0, index);
  //  index 为界，inorder右部分
  const inRight = inorder.slice(index + 1);
  //  root 之后，preorder左部分， 截取长度等同 inLeft
  const preLeft = preorder.slice(1, 1 + inLeft.length);
  //  preLeft 之后，preorder右部分， 截取长度是从左部分之后到队尾
  const preRight = preorder.slice(1 + inLeft.length);

  const root = new TreeNode(val);
  root.left = buildTree(preLeft, inLeft);
  root.right = buildTree(preRight, inRight);
  return root;
};

function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}
const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7];
console.log(buildTree(preorder, inorder));
