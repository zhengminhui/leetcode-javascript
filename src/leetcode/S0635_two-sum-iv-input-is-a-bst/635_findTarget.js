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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
  if (!root || k === undefined) return false;
  const arr = [];
  const stack = [];

  // first use in-order traverse to build the increment array
  while (root || stack.length) {
    // go to left most child
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    arr.push(root.val);
    root = root.right;
  }

  // use two pointers to get the target sum, otherwise return false
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (arr[left] + arr[right] === k) {
      return true;
    }
    if (arr[left] + arr[right] < k) {
      left += 1;
    }
    if (arr[left] + arr[right] > k) {
      right -= 1;
    }
  }

  return false;
};
