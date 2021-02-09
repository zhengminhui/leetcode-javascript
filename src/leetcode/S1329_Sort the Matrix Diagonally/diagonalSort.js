/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function (mat) {
  const map = new Map();
  const m = mat.length;
  const n = mat[0].length;
  // 准备 map
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const curr = mat[i][j];
      // 在对角线上，i-j 的差值恒定,
      if (map.has(i - j)) {
        const arr = map.get(i - j);
        arr.push(curr);
        map.set(i - j, arr);
      } else {
        map.set(i - j, [curr]);
      }
    }
  }
  // sort map
  map.forEach((arr) => arr.sort((a, b) => a - b));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      mat[i][j] = map.get(i - j).shift();
    }
  }
  return mat;
};
