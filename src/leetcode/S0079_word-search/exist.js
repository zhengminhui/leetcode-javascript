/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (dfs(board, word, i, j, 0)) return true;
    }
  }
  return false;
};

/**
 *
 * @param {*} board
 * @param {*} word
 * @param {*} i
 * @param {*} j
 * @param {*} k
 */
function dfs(board, word, i, j, k) {
  // 走出格子了, 或者当前字符与 word 的字符不匹配
  if (
    i >= board.length ||
    i < 0 ||
    j >= board[0].length ||
    j < 0 ||
    board[i][j] !== word[k]
  ) {
    return false;
  }
  // word 被遍历
  if (k === word.length - 1) {
    return true;
  }
  // 暂时置为空，防止又走到这个位置
  board[i][j] = '';
  const res =
    dfs(board, word, i - 1, j, k + 1) ||
    dfs(board, word, i + 1, j, k + 1) ||
    dfs(board, word, i, j - 1, k + 1) ||
    dfs(board, word, i, j + 1, k + 1);
  board[i][j] = word[k];
  return res;
}

const board = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E'],
];
const word = 'ABCCED';

console.log(exist(board, word));
