/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    var ans = 0;
    while ( n > 0){
        ans += Math.floor(n / 5);
        n = Math.floor(n / 5);
    }
    return ans;
};