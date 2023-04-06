/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// 被小岛那题有些误导，走到了一个死胡同：很难判断O的合法性，是被包围还是在边界，
// 应该转变思路，去找不合法的O，标记不合法的O，最后把合法的O转为X
// 从外环开始向内查找, 边上的O都是不合法的。然后dfs 向内搜寻,如果有O和边上的O相连，也是不合法的。

var solve = function (board) {
  if (!board.length) return board;
  const row = board.length;
  const col = board[0].length;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      // 从外环开始向内查找, 边上的
      if (i === 0 || j === 0 || i === row - 1 || j === col - 1) {
        if (board[i][j] === 'O') {
          dfs(i, j);
        }
      }
    }
  }

  function dfs(i, j) {
    // 越界
    if (i < 0 || j < 0 || i === row || j === col) {
      return;
    }
    if (board[i][j] === 'O') {
      // 满足搜索条件，继续
      // 将走过的格子标记为X，防止重复走到。
      board[i][j] = 'INVALID';
      dfs(i + 1, j);
      dfs(i - 1, j);
      dfs(i, j + 1);
      dfs(i, j - 1);
    }
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (board[i][j] === 'INVALID') {
        board[i][j] = 'O';
      } else if (board[i][j] === 'O') {
        board[i][j] = 'X';
      }
    }
  }
};
