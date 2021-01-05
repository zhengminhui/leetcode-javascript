/**
 * @param {number[][]} mat
 * @param {number} K
 * @return {number[][]}
 */
var matrixBlockSum = function (mat, K) {
  const r = mat.length;
  if (!r) return mat;
  const c = mat[0].length;

  const dp = mat.slice();
  const res = mat.slice();

  // build the dp matrix
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = mat[i][j];
      } else if (i === 0 && j !== 0) {
        dp[i][j] = dp[i][j - 1] + mat[i][j];
      } else if (j === 0 && i !== 0) {
        dp[i][j] = dp[i - 1][j] + mat[i][j];
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1] + mat[i][j];
      }
    }
  }
  console.log('dp', dp);
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      // if i - k <= 0 ,sum start from 0 to i + K
      // if j - k <= 0, sum start from 0 to j + k
      // else row: i-k to i + k; col: j-k to j+k
      // then this problem is transform to Range Sum Query 2D - Immutable(304)
      // rangeSum(bottomRight, upperLeft)
      const r1 = i - K <= 0 ? 0 : i - K;
      const c1 = j - K <= 0 ? 0 : j - K;

      const r2 = i + K >= r ? r - 1 : i + K;
      const c2 = j + K >= c ? c - 1 : j + K;
      console.log(r2, c2, r1, c1)
      res[i][j] = rangeSum({ dp, r2, c2, r1, c1 });
    }
  }
  return res;
};

var rangeSum = function ({ dp, r2, c2, r1, c1 }) {
  const total = dp[r2][c2];
  const left = c1 - 1 >= 0 ? dp[r2][c1 - 1] : 0;
  const top = r1 - 1 >= 0 ? dp[r1 - 1][c2] : 0;
  const overlap = c1 - 1 >= 0 && r1 - 1 >= 0 ? dp[r1 - 1][c1 - 1] : 0;

  return total - left - top + overlap;
};


var mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
var K = 1;

console.log(matrixBlockSum(mat, K));
