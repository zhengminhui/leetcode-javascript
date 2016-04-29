/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 * [5,4,3,2,0,2] --> true
 * [1,0,1,1] --> true
 */
var containsNearbyDuplicate = function(nums, k) {
    var myMap = new Map();
    for(var i=0;i<nums.length;i++){
        var key = nums[i];
        if(myMap.has(key) && i - myMap.get(key) <= k){ // if key exists and satisfy k, return true
            return true;
        } else {
            myMap.set(key, i); // need to add new key-value pair or update the index of existing number
        }
    }
    // already iterated array and didn't find expected answer
    return false;
};