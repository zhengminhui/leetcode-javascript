/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const matrix = [];
  for (let i = 0; i < n; i++) {
    matrix.push([]);
  }
  let top = 0;
  let down = n - 1;
  let left = 0;
  let right = n - 1;
  let number = 1;

  while (true) {
    for (let i = left; i <= right; i++) {
      matrix[top][i] = number;
      number += 1;
    }
    top += 1;
    if (top > down) {
      break;
    }
    for (let i = top; i <= down; i++) {
      matrix[i][right] = number;
      number += 1;
    }
    right -= 1;
    if (left > right) {
      break;
    }
    for (let i = right; i >= left; i--) {
      matrix[down][i] = number;
      number += 1;
    }
    down -= 1;
    if (top > down) {
      break;
    }
    for (let i = down; i >= top; i--) {
      matrix[i][left] = number;
      number += 1;
    }
    left += 1;
    if (left > right) {
      break;
    }
  }
  return matrix;
};


// const n = 3;
// const n = 1;
const n = 4;
console.log(generateMatrix(n));
