/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const rowMap = new Map();
  const colMap = new Map();
  const boxMap = new Map();

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const num = board[i][j];
      if (num !== '.') {
        // 根据 i，j 映射成 box序号，0-8
        const boxIndex = parseInt(i / 3, 10) * 3 + parseInt(j / 3, 10);
        if (
          rowMap.has(`${i}-${num}`) ||
          colMap.has(`${j}-${num}`) ||
          boxMap.has(`${boxIndex}-${num}`)
        ) {
          return false;
        }
        rowMap.set(`${i}-${num}`, true);
        colMap.set(`${j}-${num}`, true);
        boxMap.set(`${boxIndex}-${num}`, true);
      }
    }
  }
  return true;
};

const board = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

console.log(isValidSudoku(board));
