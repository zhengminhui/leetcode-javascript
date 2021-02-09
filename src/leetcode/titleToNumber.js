/**
 * https://leetcode.com/problems/excel-sheet-column-number/
 * @param {string} s
 * @return {number}
 * Time O(n)
 * base 26 to base 10
 * when move right one digit, need to use left digit multiplate base26 and then add right digit, thus the answer.  
 * 
 */
var titleToNumber = function(s) {
    var val = 0;
    for (var i = 0, len = s.length; i < len; i++) {
        val = val * 26 + s.charCodeAt(i) - 65 + 1;

    }
    return val;

};
