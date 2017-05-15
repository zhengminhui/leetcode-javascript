/**
 * @param {number} n
 * @return {number}
 * time O(n) space O(1)
 */
var climbStairs = function(n) {

    if (n <= 2) {
        return n;
    }

    // // method 1 reccursion: may generate Time Limit Exceeded
    // else {
    //     return climbStairs(n - 1) + climbStairs(n - 2);
    // }

    // method 2 iteration
    var fib = 2,
        fibPre = 1,
        temp;
    for (i = 3; i <= n; i++) { // start from 2th fib, and ends at n, means nth fib number.
        temp = fib;
        fib = fib + fibPre;
        fibPre = temp;
    }
    return fib;

};

console.log(climbStairs(48));