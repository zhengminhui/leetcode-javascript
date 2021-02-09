/**
 * @param {number} x
 * @return {number}
 * Time Complexity O(n)
 */
var mySqrt = function (x) {
    if (x === 0 || x === 1) {
        return x;
    }
    var low = 1;
    var high = x;
    while (low < high) {
        var mid = Math.floor(low + (high - low) / 2);
        if (mid > x / mid) {
            high = mid;
        } else {
            if (mid + 1 > x / (mid + 1)) {
                return mid;
            }
            low = mid + 1;
        }
    }
};
