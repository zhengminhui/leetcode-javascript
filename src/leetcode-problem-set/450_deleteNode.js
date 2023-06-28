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
 * @param {number} key
 * @return {TreeNode}
 */
// 如果没有 root 就返回空，如果当前 root 大于 key，就往左搜索。
// 如果命中，开始处理。
//
var deleteNode = function (root, key) {
  if (!root) return null;

  if (root.val > key) {
    root.left = deleteNode(root.left, key);
  }
  if (root.val < key) {
    root.right = deleteNode(root.right, key);
  }
  if (root.val === key) {
    // 如果是叶子节点，直接删掉，返回。
    if (!root.left && !root.right) {
      return null;
    }
    // 如果只有一个孩子，只用返回有的那个。
    if (!root.right) return root.left;
    if (!root.left) return root.right;
    // 如果有两个孩子，先针对这个节点的右孩子，dfs 到左下，也就是右孩子的最小节点。
    let cur = root.right;
    while (cur.left) {
      cur = cur.left;
    }
    // 画一个 6，5，4,3,2 的树，这时 cur 是 3，也就是右子树的左叶节点， 通过递归的方式，把它删掉。

    root.right = deleteNode(root.right, cur.val);
    // 这个节点，比 root.left 所有节点都大，同时又是 root.right 中最小的。
    // 所以就选它做新节点，原先的 right 当他的 right，原先的 left当他的 left。
    cur.right = root.right;
    cur.left = root.left;
    return cur;
  }

  return root;
};
