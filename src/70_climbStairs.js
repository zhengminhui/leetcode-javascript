/**
 * @param {number} n
 * @return {number}
 * time O(n) space O(1)
 * calc the fib number in nth place of an array
 */
var climbStairs = function (n) {
    if (n <= 2) {
        return n;
    }
    // // method 1 reccursion: may generate Time Limit Exceeded
    // else {
    //     return climbStairs(n - 1) + climbStairs(n - 2);
    // }

    // method 2 iteration
    var fib = 0;
    var fibPre = 1;
    var fibLat = 2;
    for (var i = 3; i <= n; i++) {
        fib = fibPre + fibLat;
        fibPre = fibLat;
        fibLat = fib;
    }
    return fib;
};
