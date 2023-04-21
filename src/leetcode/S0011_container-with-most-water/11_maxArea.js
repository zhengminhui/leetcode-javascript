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

// const height = [1,8,6,2,5,4,8,3,7];
// const height = [1, 1];
const height = [1, 3, 2, 5, 25, 24, 5];
console.log(maxArea(height));
