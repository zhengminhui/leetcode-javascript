/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var index = 0,
        consec = 0,
        res = 0;
    if(nums.length === 1) {
      return nums[0];
    }
    while (index < nums.length) {
        if (nums[index] === 1) {
            consec = consec === 0 ? 1 : consec;
            if(nums[index + 1] === 1) {
                consec++;
            } else {
                consec = 1;
            }
        } else {
          consec = 0;
        }
        res = consec > res ? consec : res;
        index++;
    }
    console.log(res)
    return res;
};

// findMaxConsecutiveOnes([1,0,1,1,0,1,1,1])
// findMaxConsecutiveOnes([0,0])
// findMaxConsecutiveOnes([1,1])
// findMaxConsecutiveOnes([1,0])
// findMaxConsecutiveOnes([0,1])
findMaxConsecutiveOnes([1])
