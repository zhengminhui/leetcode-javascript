/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const len = matrix.length;

  // i 是上边行座标，j是下边行座标，k是列座标
  let i = 0;
  let j = len - 1;
  let k = 0;
  // 先按横轴 x 轴翻转
  while (i < j) {
    while (k < len) {
      swap(matrix, [i, k], [j, k]);
      k++;
    }
    i++;
    j--;
    k = 0;
  }
  // 再按矩阵的主对角线翻转，左上到右下
  // i 是行座标，k是列座标，
  // 注意 i增加后，k 等于i，这样可以模拟出对角线轨迹，只用遍历上半部分，然后swap即可。
  i = 0;
  k = 0;
  while (i < len) {
    while (k < len) {
      if (i === k) {
        k++;
        continue;
      }
      swap(matrix, [i, k], [k, i]);
      k++;
    }
    i++;
    k = i;
  }
};

function swap(matrix, a, b) {
  const temp = matrix[a[0]][a[1]];
  matrix[a[0]][a[1]] = matrix[b[0]][b[1]];
  matrix[b[0]][b[1]] = temp;
}
