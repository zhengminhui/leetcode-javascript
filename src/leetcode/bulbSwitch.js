/**
 * @param {number} n
 * @return {number}
 * A bulb ends up on iff is switched an odd number of times.
 * For 1st bulb: 1*1 will change 1 time, off => on
 * for 2nd bulb: 1*2, 2*1, change 2 times, off => on ==> off
 * for 3rd bulb: 1*3, 3*1, change 2 times, off => on ==> off
 * for 4th bulb: 1*4, 2*2, 4*1, change 3 times, off => on ==> off => on
 * so only squre number will switch odd times, so this problem has changed to find tge square numbers.
 */
var bulbSwitch = function(n) {
    return Math.floor(Math.sqrt(n));
};