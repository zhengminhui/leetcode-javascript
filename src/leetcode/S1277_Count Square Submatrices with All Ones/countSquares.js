/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function (matrix) {
  const row = matrix.length;
  const col = matrix[0].length;
  let res = 0;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      // 判断内层。加的那个1是最大的那个正方形
      if (matrix[i][j] > 0 && i > 0 && j > 0) {
        matrix[i][j] = Math.min(matrix[i - 1][j - 1], matrix[i - 1][j], matrix[i][j - 1]) + 1;
      }
      // 添加外层边上单独的 1
      res += matrix[i][j];
    }
  }
  return res;
};
