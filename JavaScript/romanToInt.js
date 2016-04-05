/**
 * @param {string} s
 * @return {number}
 * 1I 5V 10X 50L 100C 500D 1000M
 * iterate from index 0 to length -2, res save the last value; if the previous smaller than later one, like 'IV', minus the previous value, eles plus the value;
 */
var romanToInt = function(s) {
    var dict = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        },
        res = dict[s[s.length - 1]];
    for (var i = 0; i < s.length - 1; i++) {
        if (dict[s[i]] < dict[s[i + 1]]) {
            res -= dict[s[i]];
        } else {
            res += dict[s[i]];
        }
    }
    return res;
};
