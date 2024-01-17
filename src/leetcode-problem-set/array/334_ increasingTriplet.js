/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  const arr = new Array(3).fill(Infinity);

  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    if (arr[0] > cur) {
      arr[0] = cur;
    } else if (arr[0] < cur && cur < arr[1]) {
      arr[1] = cur;
    } else if (arr[1] < cur) {
      arr[2] = cur;
      return true;
    }
  }

  return false;
};
