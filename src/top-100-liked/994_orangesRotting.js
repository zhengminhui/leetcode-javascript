/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const queue = [];
  let unrotten = 0;
  const m = grid.length;
  const n = grid[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 遍历坐标，如果遇到好橘子，更新 unrotten，遇到坏橘子，入队。
      if (grid[i][j] === 1) {
        unrotten++;
      } else if (grid[i][j] === 2) {
        queue.push([i, j]);
      }
    }
  }

  // 遍历完，没有好橘子，直接结束。
  if (unrotten === 0) return 0;

  let level = 0;
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  while (queue.length) {
    let len = queue.length;
    level++;
    // 有点像二叉树层序遍历
    while (len) {
      const cur = queue.shift();
      for (const dir of directions) {
        const x = cur[0] + dir[0];
        const y = cur[1] + dir[1];
        // 出界，或者本身就是坏橘子
        if (x < 0 || x >= m || y < 0 || y >= n || grid[x][y] !== 1) {
          continue;
        }
        // 避免重复计算
        grid[x][y] = 2;
        queue.push([x, y]);
        unrotten--;
      }
      len--;
    }
  }
  // 如果还有好橘子，返回 -1
  return unrotten === 0 ? level - 1 : -1;
};
