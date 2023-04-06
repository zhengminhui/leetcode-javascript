/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  if (!grid || !grid.length) return 0;

  let count = 0;
  const row = grid.length;
  const col = grid[0].length;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === '1') {
        count++;
        dfs(i, j);
      }
    }
  }

  function dfs(i, j) {
    if (i < 0 || j < 0 || i >= row || j >= col || grid[i][j] === '0') {
      return;
    }
    // 走过之后，置为零，防止重复计算。
    grid[i][j] = '0';

    dfs(i - 1, j);
    dfs(i + 1, j);
    dfs(i, j - 1);
    dfs(i, j + 1);
  }

  return count;
};
