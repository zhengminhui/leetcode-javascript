/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const len = digits.length;
  let ptr = len - 1;
  let remain = 1;

  while (remain && ptr >= 0) {
    remain = digits[ptr] + remain;
    if (remain <= 9) {
      digits[ptr] = remain;
      remain = 0;
    } else {
      digits[ptr] = remain - 10;
      remain = 1;
      ptr--;
    }
  }
  if (ptr === -1 && remain === 1) {
    digits.unshift(1);
  }
  return digits;
};

console.log(plusOne([1, 2, 3, 4]));
console.log(plusOne([9, 9, 9, 9]));
