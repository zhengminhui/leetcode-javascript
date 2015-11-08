/**
 * https://leetcode.com/problems/single-number-iii/
 * @param {number[]} nums
 * @return {number[]} Time O(n) Space O(1) The main concept is, the 2 distict
 * number are at lease have one bit different, otherwise when we do the xor
 * operation, it will equal 0. So at first we need to find the rightmost
 * different bit. It will be either 1 or 0. Then we can base this concept to
 * divide nums into 2 groups, one is 1 at that bit and the other is 0. Finally
 * we can do xor again for both group to get one number. You don't need to do
 * the xor twice makes it O(2n). You should just do it once and use xor^a to get
 * the other answer.
 */
var singleNumber = function(nums) {
    var xor = 0,
        a;
    for (var n of nums) {
        xor ^= n;
    }
    var bit = xor & -xor; //the purpose is to find the right most common bit; -xor equals to ~(xor-1) 2's complement
    for (n of nums) {
        if (bit & n) {
            a ^= n;
        }
    }
    return [a, xor ^ a];
};