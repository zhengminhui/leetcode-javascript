/**
 * @param {number[][]} grid
 * @return {number}
 */
// 先对行储存到哈希表里，并统计各次数，再遍历列，加上之前统计的次数，最终返回。
// 时间 O(n^2), 空间 O(n^2)
var equalPairs = function (grid) {
  const map = new Map();
  let res = 0;
  const n = grid.length;

  for (let i = 0; i < n; i++) {
    const str = grid[i].join(',');
    if (map.has(str)) {
      map.set(str, map.get(str) + 1);
    } else {
      map.set(str, 1);
    }
  }
  for (let j = 0; j < n; j++) {
    const arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(grid[i][j]);
    }
    const str = arr.join(',');
    if (map.has(str)) {
      res += map.get(str);
    }
  }
  return res;
};

const grid = [
  [3, 1, 2, 2],
  [1, 4, 4, 5],
  [2, 4, 2, 2],
  [2, 4, 2, 2],
];

console.log(equalPairs(grid));
