/**
 * @param {number} x
 * @return {number}
 * Time Complexity O(n)
 */
var mySqrt = function(x) {
    if (x === 0 || x === 1) {
        return x;
    }
    var lo = 1,
        hi = x
    while (lo <= hi) {
        var mid = parseInt(lo + (hi - lo) / 2);
        if (mid > x / mid) {
            hi = mid - 1;
        } else {
            if (mid + 1 > x / (mid + 1)) {
                return mid
            }
            lo = mid + 1;
        }
    }

};
console.log("the answer is " + mySqrt(3))
console.log(3/2)
