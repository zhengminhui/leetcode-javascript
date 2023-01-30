/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * 将矩阵左旋 45 度，从右上角元素开始遍历，
 * 则变成一颗类似二叉树的结构，所有较大的在右边，所有较小的在左边
 * 从右上角走到左下角，找到 target，时间 O(m+n),空间 O(1)
 */
var searchMatrix = function (matrix, target) {
  if (matrix.length === 0) {
    return false;
  }
  const m = matrix.length;
  const n = matrix[0].length;
  let i = 0;
  let j = n - 1;
  while (i < m && j >= 0) {
    const cur = matrix[i][j];
    if (target > cur) {
      i++;
    } else if (target < cur) {
      j--;
    } else {
      return true;
    }
  }
  return false;
};
