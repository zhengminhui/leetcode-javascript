/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const order = [];
  if (!matrix.length) return order;

  let top = 0;
  let down = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  while (true) {
    for (let i = left; i <= right; i++) {
      order.push(matrix[top][i]);
    }
    top += 1;
    if (top > down) {
      break;
    }
    for (let i = top; i <= down; i++) {
      order.push(matrix[i][right]);
    }
    right -= 1;
    if (left > right) {
      break;
    }
    for (let i = right; i >= left; i--) {
      order.push(matrix[down][i]);
    }
    down -= 1;
    if (top > down) {
      break;
    }
    for (let i = down; i >= top; i--) {
      order.push(matrix[i][left]);
    }
    left += 1;
    if (left > right) {
      break;
    }
  }
  return order;
};
