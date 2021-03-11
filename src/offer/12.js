/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const row = board.length;
  const col = board[0].length;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (dfs(board, word, i, j, 0)) return true;
    }
  }
  return false;
};

function dfs(board, word, i, j, k) {}
