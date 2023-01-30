/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * 将矩阵左旋 45 度，从右上角元素开始遍历，
 * 则变成一颗类似二叉树的结构，所有较大的在右边，所有较小的在左边
 * 从右上角走到左下角，找到 target，时间 O(m+n), 空间 O(1)
 */
var findNumberIn2DArray = function (matrix, target) {
  if (!matrix.length) return false;

  const row = matrix.length;
  const col = matrix[0].length;
  let i = 0;
  let j = col - 1;

  while (i < row && j >= 0) {
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

const matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];

const t1 = 5;
const t2 = 20;

// console.log(findNumberIn2DArray(matrix, t1));
console.log(findNumberIn2DArray(matrix, t2));
