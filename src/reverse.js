/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var sign = x > 0 ? 1 : -1;
    // num -> string -> array -> reverse
    var nx = x.toString().split('').reverse();
    // array -> string -> num
    var ans = parseInt(nx.join(''));
    // handle the overflow case however in JavaScript the Number.MAX_VALUE is way larger than this; 32 bit Max Int 2^31-1, 32 bit Min Int -2^31+1,
    if (ans > Math.pow(2, 31) - 1 || ans < -Math.pow(2, 31) + 1) {
        return 0;
    }
    return sign * ans;
};
