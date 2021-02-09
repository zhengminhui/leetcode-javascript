/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
  if (n <= 1) return 1;
  let ways;
  let pre = 1;
  let lat = 1;
  for (let i = 1; i < n; i++) {
    ways = pre + lat;
    ways %= 1e9 + 7;
    pre = lat;
    lat = ways;
  }
  return ways;
};

const n = 100;
console.log(numWays(n));
