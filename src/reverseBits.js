/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 * Since it's 32 bits unsigned integer, and javascript don't have the starting zeros, 
 * so firstly we need to add the binary string to 32 bit by adding zeros in the front. 
 * After that then we can break the string to array and use reverse and then join up 
 * to string again. Finanly parse to decimal Integer.
 */
var reverseBits = function(n) {
  var str = n.toString(2);
  while (str.length < 32) {
    str = '0' + str;
  }
  var rev = str.split('').reverse().join('');
  return parseInt(rev, 2);
};
