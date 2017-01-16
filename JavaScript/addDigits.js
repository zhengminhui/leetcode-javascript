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

var addDigits2 = function(num) {
  if(num === 0) return 0;
  else {
    if (num % 9 === 0 ) return 9;
    else {
      return num % 9;
    }
  }
}

console.log(addDigits(28))
console.log(addDigits2(28))
