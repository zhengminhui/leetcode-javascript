/**
 * @param {number[]} digits
 * @return {number[]}
 * corner case: [0,0,9,9]; [9,9]
 * iterate from back, if less than 9, plus one and returns, else set to zero and move left one step, repeat again. In case of all 9, ushift 1 to the head, and return digits. Don't return digits.unshift(1)! Because unshift returns the length of new arr.
 */
var plusOne = function(digits) {
    var len = digits.length;
    for (var i = len - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    digits.unshift(1);
    return digits;
};