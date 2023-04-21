/**
 * @param {number[]} height
 * @return {number}
 */
// 双指针
var maxArea = function (height) {
  let max = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    // 依次计算面积，找短板，底乘高
    const area = Math.min(height[left], height[right]) * (right - left);
    max = Math.max(area, max);
    // 哪边矮，排除哪边
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
};
