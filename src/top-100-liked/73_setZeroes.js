/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// 难点在于示例 1 中，m[1][0]的 1,
// 它是被右边的 0 影响，所以要变为 0
// 但是它不能影响第一列的其他两个 1.
// 所以 flag 要最后再来处理。
// 0509心得，主要思想就是先标记首行首列，看有没有 0，然后从中间往外渲染 0，最后再检查之前的 flag
var setZeroes = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  let flagCol0 = false;
  let flagRow0 = false;
  // 检查每一行的头是否 0，往 ↓，flagCol0 set to true
  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 0) {
      flagCol0 = true;
    }
  }
  // 检查每一列的头是否 0，往 →，flagRow0 set to true
  for (let j = 0; j < n; j++) {
    if (matrix[0][j] === 0) {
      flagRow0 = true;
    }
  }
  // 遍历数组，如果当前格子是 0，则这一行，列的头，置为 0
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }
  // 再遍历数组，如果行、列头为 0，则这一行、列都是 0
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }
  // 最后来处理第一行、第一列的变化
  if (flagCol0) {
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0;
    }
  }
  if (flagRow0) {
    for (let j = 0; j < n; j++) {
      matrix[0][j] = 0;
    }
  }
};
