/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var arr = [],
        sum = 0;
    if (n === 0) return true;

    while (sum !== 1) {
        while (n !== 0) {
            sum += Math.pow(n % 10, 2);
            n = Math.floor(n / 10);
        }
        // if sum exist, means it starts to cycle which does not include 1
        if (arr.indexOf(sum) !== -1) {
            return false;
        }
        // if sum is 1, return true
        if (sum === 1) {
            break;
        }
        arr.push(sum);
        n = sum;
        // need to reset sum everytime
        sum = 0;
    }
    return true;
};
