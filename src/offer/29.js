/**
 * @param {number[][]} matrix
 * @return {number[]}
 * 分边遍历，左右，上下，右左，下上；每边遍历完后，需要向下一个放下前进一步，以防止角上的数字多打印一遍。
 */
var spiralOrder = function (matrix) {
  const order = [];
  if (!matrix.length) {
    return order;
  }
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

// const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]
console.log(spiralOrder(matrix));
