/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (!root || p === root || q === root) {
    return root;
  }

  // 分别在左树和右树中找p，q
  // 以5，1为例，一左一右，这时左右都是null，最後就會返回null
  // 以5，2为例，right 是null；left往下走，root === p，返回root 5。
  // 以2，4为例，right 是null；left往下走，5的left 是null，往right，root === p， 返回root 2
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (left && right) {
    return root;
  }
  if (left) {
    return left;
  }
  if (right) {
    return right;
  }

  return null;
};
