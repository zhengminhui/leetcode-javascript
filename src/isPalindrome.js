/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "")
    // var ns = s.split("").reverse().join("")
    // return s === ns

    var count = 0,
        len = s.length
    if (len % 2 === 0) {
        count = len / 2
    } else {
        if (len === 1) {
            return true
        }
        count = (len - 1) / 2
    }
    for (var i = 0; i < count; i++) {
        if (s[i] !== s.slice(-i - 1)[0]) {
            return false
        }
    }
    return true

};
