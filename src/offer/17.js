/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
  const num = Math.pow(10, n);
  const numbers = [];
  for (let i = 1; i < num; i++) {
    numbers.push(i);
  }
  return numbers;
};

const n = 1;
console.log(printNumbers(n));
