/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs()) {
      }
    }
  }

  return res;
};

function dfs() {}

function getCoordSum(coord) {
  return getSum(coord[0]) + getSum(coord[1]);
}

function getSum(num) {
  let sum = 0;
  while (num) {
    const mod = num % 10;
    sum += mod;
    num = Math.floor(num / 10);
  }
  return sum;
}
