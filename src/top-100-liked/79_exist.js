/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  function dfs(i, j, k) {
    // 走出格子了, 或者当前字符与 word 的字符不匹配
    if (
      i < 0 ||
      i >= board.length ||
      j < 0 ||
      j >= board[0].length ||
      board[i][j] !== word[k]
    ) {
      return false;
    }
    // 要先判断 false 条件，再检查长度是否到了。否则会直接返回 true
    // word 被遍历完
    if (k === word.length - 1) {
      return true;
    }
    // 暂时置为空，防止又走到这个位置
    board[i][j] = '';
    const res =
      dfs(i + 1, j, k + 1) ||
      dfs(i - 1, j, k + 1) ||
      dfs(i, j + 1, k + 1) ||
      dfs(i, j - 1, k + 1);
    // 当前格子判断完了，要复原。
    board[i][j] = word[k];
    return res;
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (dfs(i, j, 0)) {
        return true;
      }
    }
  }
  return false;
};
