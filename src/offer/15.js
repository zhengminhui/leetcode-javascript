/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let w = 0;
  while (n !== 0) {
    n = n & (n - 1);
    w += 1;
  }
  return w;
};

// const n = 00000000000000000000000011111000;
// const n = 11111111111111111111111111111101;
const n = 4294967293; // 1111111111111111111111111111101
console.log("weight", hammingWeight(n));
