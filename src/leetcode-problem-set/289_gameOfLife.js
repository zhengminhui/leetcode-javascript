/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// 没什么技术含量
// 判断边界时 continue 写成了 return，浪费很多时间。
// 注意保存一份 copy，因为状态是同时发生的，没有依赖性，
// 所以要在原有的基础上比对。
var gameOfLife = function (board) {
  const m = board.length;
  const n = board[0].length;
  const copy = JSON.parse(JSON.stringify(board));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const isLive = checkSurround(i, j);
      board[i][j] = isLive;
    }
  }
  function checkSurround(i, j) {
    const status = copy[i][j];
    let count = 0;
    const surround = [
      [i - 1, j - 1],
      [i - 1, j],
      [i - 1, j + 1],
      [i, j - 1],
      [i, j + 1],
      [i + 1, j - 1],
      [i + 1, j],
      [i + 1, j + 1],
    ];
    for (const coord of surround) {
      const [i, j] = coord;
      if (i < 0 || j < 0 || i === m || j === n) {
        continue;
      }
      if (copy[i][j] === 1) {
        count++;
      }
    }
    if (status === 1) {
      if (count < 2 || count > 3) return 0;
      if (count === 2 || count === 3) return 1;
    }
    if (status === 0) {
      if (count === 3) return 1;
    }
  }
};

const board = [
  [1, 1],
  [1, 0],
];
console.log(gameOfLife(board));
