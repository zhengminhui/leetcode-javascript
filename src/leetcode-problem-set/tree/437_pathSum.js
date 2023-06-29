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
 * @param {number} targetSum
 * @return {number}
 */
// HashMap 的 key 是前缀和， value是该前缀和的节点数量
var pathSum = function (root, targetSum) {
  const prefix = new Map();
  let res = 0;

  function dfs(root, p) {
    if (!root) return 0;
    // 检查传入的 p(前缀和) 是否存在，更新 p 出现的次数。
    prefix.set(p, (prefix.get(p) || 0) + 1);

    // 更新截止到当前节点的 sum 值
    const curSum = p + root.val;
    const diff = curSum - targetSum;
    // 如果 diff 出现过，说明这个节点可以满足加和
    res += prefix.get(diff) || 0;

    // 对左右子树继续寻找 当前的 sum 值，在下一回合，这个 sum 值会继续加 node value 并更新。
    dfs(root.left, curSum);
    dfs(root.right, curSum);
    // 退出这个节点了，要撤销掉这个节点。怎么理解？
    // 遍历完一个节点的所有子节点后，将其从 map 中除去，以免影响旁支。
    // 比如，左边的 5 用完了，得把它删掉，避免 map 影响到右边 -3 子树的计算。
    prefix.set(p, prefix.get(p) - 1);
  }

  // 初始的前缀和 0
  dfs(root, 0);
  return res;
};
