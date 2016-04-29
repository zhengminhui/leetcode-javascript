/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    if(s.length === 0) return s;
    return s.split('').reverse().join('');
};