/**
 * https://leetcode.com/problems/add-binary/
 * @param {string} a
 * @param {string} b
 * @return {string}
 * Computation from string usually can be simplified by using a carry
 */
var addBinary = function(a, b) {
    var i = a.length - 1,
        j = b.length - 1,
        carry = 0,
        res = [];
    while(i>=0 || j>=0){
        if(i>=0) carry += a[i--] - '0';
        if(j>=0) carry += b[j--] - '0';
        res.unshift(carry % 2);
        carry = Math.floor(carry / 2);
    }
    if(carry !== 0) res.unshift(carry);
    return res.join('');

    
};

console.log(addBinary("10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
  "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"));
