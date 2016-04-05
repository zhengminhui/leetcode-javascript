/**
 * @param {string} str
 * @return {number}
 * First check if the string has +/- sign, then start to iterate the string. if it's a number, good, otherwise break;
 * Don't forget to handle overflow case, if larger than MAX_INT, return MAX_INT(2^31-1), else if smaller than MIN_INT, return MIN_INT(-2^31);
 */
var myAtoi = function(str) {
    var s = str.trim(),
        res = 0,
        sign = 1,
        i,
        ns = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    if (s.length === 0) return 0;
    if (s[0] === '-') {
        sign = -1;
        i = 1;
    } else if (s[0] === '+') {
        sign = 1;
        i = 1;
    } else {
        i = 0;
    }
    while (i < s.length) {
        if (ns.indexOf(s[i]) !== -1) {
            num = parseInt(s[i]);
            res = res * 10 + num;
        } else {
            break;
        }
        i++;
    }

    res = sign * res;
    if (res > Math.pow(2, 31) - 1) {
        return Math.pow(2, 31) - 1;
    } else if (res < Math.pow(-2, 31)) {
        return Math.pow(-2, 31);
    } else {
        return res;
    }
};
