/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function (grid) {
  if (!grid.length) return 0;

  const row = grid.length;
  const col = grid[0].length;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const cur = grid[i][j];
      if (i === 0 && j === 0) {
        continue;
      } else if (i === 0 && j > 0) {
        grid[i][j] = cur + grid[i][j - 1];
      } else if (i > 0 && j === 0) {
        grid[i][j] = cur + grid[i - 1][j];
      } else if (i > 0 && j > 0) {
        grid[i][j] = Math.max(cur + grid[i][j - 1], cur + grid[i - 1][j]);
      }
    }
  }

  return grid[row - 1][col - 1];
};
