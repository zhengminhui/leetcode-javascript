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
  const row = board.length;
  const col = board[0].length;
  // 走出格子了, 或者当前字符与 word 的字符不匹配
  if (i < 0 || i >= row || j < 0 || j >= col || board[i][j] !== word[k]) {
    return false;
  }
  if (k === word.length - 1) {
    return true;
  }
  // k = k+1;
  // 暂时把走过的格子置为空，防止又走上来
  board[i][j] = '';
  const res =
    dfs(board, word, i - 1, j, k + 1) ||
    dfs(board, word, i + 1, j, k + 1) ||
    dfs(board, word, i, j - 1, k + 1) ||
    dfs(board, word, i, j + 1, k + 1);
  // 需要把空格子还原，因为可能上一个起点的搜索不成功，但是后面起点的搜索可以，避免影响后面的搜索。
  // 注意 k 不能在 33 行增加，因为还需要再 res 计算完成后写回当前格子，如果 k 增加了，则棋盘被改变
  // 所以 dfs 方法要在传参时执行 k + 1
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
