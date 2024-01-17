/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const board = new Array(n);
  for (let i = 0; i < n; i++) {
    board[i] = new Array(n).fill('.');
  }

  const cols = new Set();
  // 主对角线 左上-右下
  const diag1 = new Set();
  const diag2 = new Set();
  const res = [];

  function backtracking(row) {
    // 回溯的跳出条件, 当行满了
    if (row === n) {
      const copy = Array.from(board);
      for (let i = 0; i < n; i++) {
        copy[i] = copy[i].join('');
      }
      res.push(copy);
      return;
    }
    for (let col = 0; col < n; col++) {
      // 当改点所在的列，和对角线都没有 Q，可以继续，否则不符合条件。
      if (!cols.has(col) && !diag1.has(row + col) && !diag2.has(row - col)) {
        board[row][col] = 'Q';
        // 分别记录，列，主副对角线
        cols.add(col);
        diag1.add(row + col);
        diag2.add(row - col);
        backtracking(row + 1);
        // 还原
        board[row][col] = '.';
        cols.delete(col);
        diag1.delete(row + col);
        diag2.delete(row - col);
      }
    }
  }

  backtracking(0);
  return res;
};
