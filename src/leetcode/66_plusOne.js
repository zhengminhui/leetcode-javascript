/**
 * @param {number[]} digits
 * @return {number[]}
 * corner case: [0,0,9,9]; [9,9]
 * [1,2,3] means 123, plus 1 return [1,2,4]
 * [9,9] means 99, plus 1 return [1,0,0]
 * iterate from back, if less than 9, plus one and returns,
 * else set to zero and move left one step, repeat again.
 * In case of all 9, ushift 1 to the head, and return digits.
 * Don't return digits.unshift(1)! Because unshift returns the length of new arr.
 * principle: meet 9, set to 0; otherwise plus one.
 */
var plusOne = function(digits) {
  for (var i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    } else {
      digits[i] = 0;
    }
  }
  digits.unshift(1);
  return digits;
};
