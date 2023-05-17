/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 0517note:
// 0：指针和左换,1:指针继续；
// 2：指针和右换,右换之后不用移动 ptr，要再检查换过来的数字
var sortColors = function (nums) {
  let left = 0;
  let ptr = 0;
  let right = nums.length - 1;

  while (ptr <= right) {
    const cur = nums[ptr];
    if (cur === 0) {
      swap(nums, left, ptr);
      left++;
      ptr++;
    } else if (cur === 1) {
      ptr++;
    } else if (cur === 2) {
      swap(nums, right, ptr);
      right--;
    }
  }
};

function swap(nums, a, b) {
  const temp = nums[a];
  nums[a] = nums[b];
  nums[b] = temp;
}
