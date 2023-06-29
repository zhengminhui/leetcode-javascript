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
 */
// 简单题了感觉，直接把 root 中序遍历，存在数组里，然后维护index指针
var BSTIterator = function (root) {
  this.index = -1;
  const order = [];

  function dfs(node) {
    if (!node) return;
    const { left, right, val } = node;
    if (left) {
      dfs(left);
    }
    order.push(val);
    if (right) {
      dfs(right);
    }
  }

  dfs(root);
  this.inorder = order;
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  this.index++;
  return this.inorder[this.index];
};

/**
 * @return {boolean}
 */
// has next 是指至少在倒数第二个
BSTIterator.prototype.hasNext = function () {
  return this.index < this.inorder.length - 1;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
