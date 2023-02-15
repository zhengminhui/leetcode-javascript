/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let res = 0;

  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    res = Math.max(res, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return res;
};

// const height = [1,8,6,2,5,4,8,3,7];
// const height = [1, 1];
const height = [1, 3, 2, 5, 25, 24, 5];
console.log(maxArea(height));
