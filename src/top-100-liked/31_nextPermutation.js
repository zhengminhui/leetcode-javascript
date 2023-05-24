/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let i = nums.length - 2;
  // 找到第一个比它右边数更小的数，比如 152432 中左边的2
  // 如果比他大，就继续向左，直到跳出 while
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }
  // 再在该数右边寻找第一个比他大的数，比如 152432 的 3，
  // 如果比他小，就继续向左，直到跳出 while
  // 如果找到了，就互换位置
  if (i >= 0) {
    let j = nums.length - 1;
    while (j >= 0 && nums[i] >= nums[j]) {
      j--;
    }
    swap(nums, i, j);
  }
  // 此时 i 的右边，从右向左是一个递增序列，153422，
  // 为了使增幅更小，可以调整 422 的顺序，成为 153224
  let l = i + 1;
  let r = nums.length - 1;
  while (l < r) {
    swap(nums, l, r);
    l++;
    r--;
  }
};

function swap(nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
