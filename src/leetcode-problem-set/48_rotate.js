/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const len = matrix.length;
  // 先按横轴翻转
  // i 是上边行座标，j是下边行座标，k是列座标
  let i = 0;
  let j = len - 1;
  let k = 0;
  while (i < j) {
    while (k < len) {
      swap(matrix, [i, k], [j, k]);
      k++;
    }
    i++;
    j--;
    k = 0;
  }
  // 再按矩阵的主对角线翻转
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

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const matrix1 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
console.log(rotate(matrix));
console.log(rotate(matrix1));
