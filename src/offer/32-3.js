/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];

  let reverse = false;
  const order = [];
  const queue = [];
  queue.push(root);

  while (queue.length) {
    let arr = [];
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const cur = queue.shift();
      if (reverse) {
        arr.push(cur.val);
      } else {
        arr.unshift(cur.val);
      }
      cur.right && queue.push(cur.right);
      cur.left && queue.push(cur.left);
    }
    reverse = !reverse;
    order.push(arr);
  }
  return order;
};

// const root = [3,9,20,null,null,15,7]
const root = [1, 2, 3, 4, null, null, 5];
