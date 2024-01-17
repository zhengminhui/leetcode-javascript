/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
//  前序遍历。
var serialize = function (root) {
  if (!root) {
    return 'null';
  }
  const left = serialize(root.left);
  const right = serialize(root.right);

  return `${root.val},${left},${right}`;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
// 构建时，会先构建左子树直到尽头，所以成组消掉小括号里的
// [1,(2,null,null),(3,(4,null,null),(5,null,null))]
var deserialize = function (data) {
  const arr = data.split(',');

  function buildTree(arr) {
    const val = arr.shift();
    if (val === 'null') {
      return null;
    }
    const root = new TreeNode(val);
    root.left = buildTree(arr);
    root.right = buildTree(arr);
    return root;
  }

  const tree = buildTree(arr);
  return tree;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}
