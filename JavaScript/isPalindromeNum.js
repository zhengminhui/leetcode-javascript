/**
 * @param {number} x
 * @return {boolean}
 * corner case: x < 0 return fasle; if x > 2^31 -1 , overflow, return false;
 * generate a new number, and check if it equals to original x
 */
var isPalindrome = function(x) {
    var xCopy = x,
        newX = 0,
        tail;
    if (x < 0) return false;

    while (x !== 0) {
        tail = x % 10;
        newX = newX * 10 + tail;
        x = Math.floor(x / 10);
    }
    if (newX > Math.pow(2, 31) - 1) return false;
    return xCopy === newX;

};
