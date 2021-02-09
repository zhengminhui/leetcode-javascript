/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  const arr = [];
  while (n !== 0) {
    const div = n % 10;
    arr.push(div);
    n = parseInt(n / 10, 10);
  }
  const product = arr.reduce((a, b) => a * b);
  const sum = arr.reduce((a, b) => a + b);
  return product - sum;
};
