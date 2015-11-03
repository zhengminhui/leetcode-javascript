/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var count = 0;
    // while (n !== 0) {
    //     if (n & 1 === 1) {
    //         count++;
    //     }
    //     n = n >>> 1; //be aware of the difference between >> and >>>
    // }
    // return count;

    while (n !== 0) {
        // n & (n - 1) help to remove the right most 1 for n,
        // and normally seconde method is faster than first one.
        // eg. 9 has 4 iteration for method 1 however just 2 iteration for method 2
        n = n & (n - 1);
        count++;

    }
    return count;
};
