/**
 * @param {number[][]} matrix
 * @return {number[]}
 * 分边遍历，左右，上下，右左，下上；
 * 每边遍历完后，需要向下一个方向前进一步，以防止角上的数字多打印一遍。
 * 先写4个遍历 for 循环，再写指针的加减，最后再写跳出条件。
 * 不要想的太复杂，判断的条件只有两个，top 不能大于 down，left 不能大于 right
 */
var spiralOrder = function (matrix) {
  const res = [];
  if (!matrix.length) return res;

  let top = 0;
  let down = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  while (true) {
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
    top++;
    if (top > down) {
      break;
    }
    for (let i = top; i <= down; i++) {
      res.push(matrix[i][right]);
    }
    right--;
    if (left > right) {
      break;
    }
    for (let i = right; i >= left; i--) {
      res.push(matrix[down][i]);
    }
    down--;
    if (top > down) {
      break;
    }
    for (let i = down; i >= top; i--) {
      res.push(matrix[i][left]);
    }
    left++;
    if (left > right) {
      break;
    }
  }
  return res;
};

// const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// const matrix = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
// ];
const matrix = [
  [2, 5, 8],
  [-1, 0, 4],
];
console.log(spiralOrder(matrix));
