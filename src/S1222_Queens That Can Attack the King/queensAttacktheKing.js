/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
var queensAttacktheKing = function (queens, king) {
  const res = [];
  const len = 8;
  const [kx, ky] = king;
  const set = new Set();

  queens.forEach((q) => {
    set.add(`${q[0]}${q[1]}`);
  });

  // 从 king 的坐标点开始，向八个方向蔓延, 每次 dx，增加 1
  const traverse = function (x, y, dx, dy) {
    // 如果当前 x，y 跑到棋盘外面就不再记录了
    if (x < 0 || y < 0 || x > len - 1 || y > len - 1) { return; }
    if (set.has(`${x}${y}`)) {
      res.push([x, y]);
      // 这里的 return 不能忘了，用来判断该方向上是否已经有了 queen，如果有了就跳出，不再继续往前走了。
      return;
    }
    // 当前坐标加上向量值，移动到向量指向的新位置
    traverse(x + dx, y + dy, dx, dy);
  };

  // 通过两层循环生成8个方向向量, 如[-1, 1],[0,1],[1,1],[1,0] 等等
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      // ignore [0, 0]
      if (i === 0 && j === 0) continue;
      // 起始点是 king 的 x，y 坐标
      traverse(kx, ky, i, j);
    }
  }
  return res;
};
