/**
 * @param {number[]} arr
 * @return {number}
 */
//  极左，极右都是无穷小
//  左<=右, 继续向右搜寻
//  左>右, 左为峰值
var peakIndexInMountainArray = function (arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (arr[mid] <= arr[mid + 1]) {
      left = mid + 1;
    } else if (arr[mid] > arr[mid + 1]) {
      right = mid;
    }
  }
  return right;
};

const arr = [24, 69, 100, 99, 79, 78, 67, 36, 26, 19];

console.log(peakIndexInMountainArray(arr));
