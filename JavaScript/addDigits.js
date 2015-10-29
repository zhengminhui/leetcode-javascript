/**
 * @param {number} num
 * @return {number}
 * 0 if num == 0 
 * 9 if num%9==0 and num !=0
 * num mod 9 if num%9 !=0 and num != 0
 */
var addDigits = function(num) {
    return 1 + (num - 1) % 9;
};

console.log(addDigits(28))
