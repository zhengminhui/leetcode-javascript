/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
// 先判断奇偶，找中点。然后递归左段和右段。
var sortedArrayToBST = function (nums) {
  const mid = nums.length % 2 ? (nums.length - 1) / 2 : nums.length / 2;
  const val = nums[mid];
  // val 可能为 0，有点小坑，所以检查是否为 undefined
  if (val === undefined) return null;

  const root = new TreeNode(val);
  const left = nums.slice(0, mid);
  const right = nums.slice(mid + 1);

  root.left = sortedArrayToBST(left);
  root.right = sortedArrayToBST(right);

  return root;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
