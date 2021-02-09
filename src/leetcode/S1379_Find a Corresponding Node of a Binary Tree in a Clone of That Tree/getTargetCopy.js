/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */
// bfs find target
var getTargetCopy = function (original, cloned, target) {
  const queue = [cloned];
  let res = null;

  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const curr = queue.shift();
      const { val, left, right } = curr;
      if (val === target.val && deepEqual(target, curr)) {
        res = curr;
        break;
      }
      if (left) queue.push(left);
      if (right) queue.push(right);
    }
  }
  return res;
};

// target, cloned
var deepEqual = function (t, c) {
  if (t === null || c === null) return t === c;
  if (t.val !== c.val) return false;

  return deepEqual(t.left, c.left) && deepEqual(t.right, c.right);
}
