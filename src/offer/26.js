/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
  let res = false;
  if (A && B) {
    // 如果命中，调用 treeContains，开始对比
    if (A.val === B.val) {
      res = treeContains(A, B);
    }
    // 没命中祖先节点，递归继续比对左边
    if (!res) {
      res = isSubStructure(A.left, B);
    }
    // 左边也不对，递归继续比对右边
    if (!res) {
      res = isSubStructure(A.right, B);
    }
  }
  return res;
};

function treeContains(a, b) {
  // b 遍历完了，说明全对上了，返回true
  if (!b) {
    return true;
  }
  // a 没了，但是b 还有，说明不对
  if (!a) {
    return false;
  }
  if (a.val !== b.val) {
    return false;
  }
  // 继续递归a 的左右和b 的左右
  return treeContains(a.left, b.left) && treeContains(a.right, b.right);
}
