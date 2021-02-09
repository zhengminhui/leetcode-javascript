/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
  if (nums.length === 1) {
    const val = nums[0] || null;
    const root = new TreeNode(val);
    return root;
  }

  const maxValue = Math.max.apply(null, nums);
  const maxIndex = nums.indexOf(maxValue);

  const leftTree = nums.slice(0, maxIndex);
  const rightTree = nums.slice(maxIndex + 1);

  const root = new TreeNode(maxValue);
  root.left = leftTree.length ? constructMaximumBinaryTree(leftTree) : null;
  root.right = rightTree.length ? constructMaximumBinaryTree(rightTree) : null;

  return root;
};
