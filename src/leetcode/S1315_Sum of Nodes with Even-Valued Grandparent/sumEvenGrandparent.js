/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * To check if the node has grandchildren, so we gonna use dfs to iterator the tree
 * init the dfs with a stack
 * @param {TreeNode} root
 * @return {number}
 */
var sumEvenGrandparent = function (root) {
  if (!root) return 0;

  const stack = [root];
  let sum = 0;

  while (stack.length) {
    const node = stack.pop();
    if (node) {
      const { val, left, right } = node;

      // accumulation grand children's value
      if (isEven(val) && (hasChildren(left) || hasChildren(right))) {
        sum += sumGrandChildrenVal(node);
      }
      // iterate from left to right, so push right, then the left;
      // so that left child will iterate firstly
      stack.push(right);
      stack.push(left);
    }
  }
  return sum;
};

var isEven = function (val) {
  return val % 2 === 0;
};

var hasChildren = function (node) {
  if (!node) return false;
  return node.left !== null || node.right !== null;
};

var sumGrandChildrenVal = function (node) {
  let sum = 0;
  const { left, right } = node;

  if (left) {
    sum += null2Zero(left.left) + null2Zero(left.right);
  }
  if (right) {
    sum += null2Zero(right.left) + null2Zero(right.right);
  }
  return sum;
};

var null2Zero = function (node) {
  return node === null ? 0 : node.val;
};
