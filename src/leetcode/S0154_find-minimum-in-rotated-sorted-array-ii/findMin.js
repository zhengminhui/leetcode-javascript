/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let low = 0;
  let high = nums.length - 1;

  while (low < high) {
    const mid = Math.floor(low + (high - low) / 2);
    // 如果 mid 比 high 小，说明右侧单调增，mid 成为新的右侧端点
    // 6,1,2,3,4,5
    if (nums[mid] < nums[high]) {
      high = mid;
    } else if (nums[mid] > nums[high]) {
      // mid 比 high 大，说，mid 和 high 之间经历了下降的转折，我们关注 mid - high 之间，所以将 mid 右移一位
      // 4，5，6，7，2，3
      low = mid + 1;
    } else {
      // 如果相等，去除右边的最大值，将最大值左移一位。
      //  2,2,2,2,0,1,2
      high -= 1;
    }
  }
  return nums[low];
};
