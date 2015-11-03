/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    // var count = 0;
    // if (n <= 0) return false;
    // while (n > 0) {
    //     if (n & 1 == 1) {
    //         count++;
    //     }
    //     n = n >> 1;
    // }
    // return count === 1;
    
    return n > 0 && (n & (n - 1)) === 0;

};
