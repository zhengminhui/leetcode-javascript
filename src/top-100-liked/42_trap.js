/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let left = 0;
  let leftMax = 0;
  let right = height.length - 1;
  let rightMax = 0;
  let res = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      // 如果，柱子大于 leftMax，更新之
      // 否则，计算当前凹处的体积。
      if (height[left] > leftMax) {
        leftMax = height[left];
      } else {
        res += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] > rightMax) {
        rightMax = height[right];
      } else {
        res += rightMax - height[right];
      }
      right--;
    }
  }

  return res;
};
