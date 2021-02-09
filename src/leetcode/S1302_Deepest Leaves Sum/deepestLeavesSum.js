/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// var deepestLeavesSum = function (root) {
//   const height = getHeight(root);
//   return recur(root, 1, height, 0);
// };

// var recur = function (node, level, height, sum) {
//   if (!node) return sum;

//   const { val, left, right } = node;

//   if (level === height) {
//     sum += val;
//   }

//   sum = recur(left, level + 1, height, sum);
//   sum = recur(right, level + 1, height, sum);

//   return sum;
// };


// // recursive get the height of the tree
// var getHeight = function (root) {
//   if (!root) return 0;
//   return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
// };

// bfs
var deepestLeavesSum = function (root) {
  if (!root) return 0;

  const queue = [root];
  let sum = 0;

  while (queue.length) {
    sum = 0;
    const len = queue.length;
    // start a new level
    for (let i = 0; i < len; i++) {
      const { val, left, right } = queue.shift();
      sum += val;
      if (left) queue.push(left);
      if (right) queue.push(right);
    }
  }

  return sum;
};
