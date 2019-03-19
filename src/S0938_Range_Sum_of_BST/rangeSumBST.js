/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var recursiveSum = function(root, accu, L, R) {
  if (root === null) return accu;
  if (root.val >= L && root.val <= R) {
    const newAccu = accu + root.val;
    return (
      recursiveSum(root.left, newAccu, L, R) + recursiveSum(root.right, newAccu, L, R) - newAccu
    );
  }
  if (root.val < L) {
    return recursiveSum(root.right, accu, L, R);
  }
  if (root.val > R) {
    return recursiveSum(root.left, accu, L, R);
  }
  return accu;
};

var rangeSumBST = function(root, L, R) {
  const accu = 0;
  const res = recursiveSum(root, accu, L, R);
  return res;
};
