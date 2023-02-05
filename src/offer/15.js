/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let res = 0;
  while (n) {
    if (n & 1) {
      res += 1;
    }
    n = n >>> 1;
  }
  return res;
};

// const n = 00000000000000000000000011111000;
// const n = 11111111111111111111111111111101;
const n = 4294967293; // 1111111111111111111111111111101
console.log('weight', hammingWeight(n));
