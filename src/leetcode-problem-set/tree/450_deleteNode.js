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
    // 如果有两个孩子，以示例 1 为例，但是 4 左下多加一个 3.5 。
    // [5,3,6,2,4,null,7,null,null,3.5]
    // 要把 3 删掉。我们不能立刻删掉他，需要做一些修补工作
    // 找到 3 后，先针对这个节点的右孩子 4，dfs 到左下，也就是右孩子的最小节点。
    // root 是 3，cur 是 4
    let cur = root.right;
    // 假想 4 左下如果有个 3.5，就会遍历到 3.5，然后把 3.5 删掉。
    while (cur.left) {
      cur = cur.left;
    }
    // 到这里，cur 是 3.5
    // 也就是右子树的左叶节点， 通过递归的方式，把它删掉。
    // 3的右子树变成，没有 3.5 的子树。
    root.right = deleteNode(root.right, cur.val);
    // 这个 3.5 节点，比 root.left 所有节点都大，同时又是 root.right 中最小的。
    // 所以就选它做新节点，原先的 right 当他的 right，原先的 left当他的 left。
    cur.right = root.right;
    cur.left = root.left;
    return cur;
  }

  return root;
};
