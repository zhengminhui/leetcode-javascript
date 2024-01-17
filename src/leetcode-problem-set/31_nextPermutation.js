/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let i = nums.length - 2;
  // 找到第一个比它右边数更小的数，比如 152432 中的 2
  // 如果比他大，就继续向左，直到跳出 while
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }
  // 再在该数右边寻找第一个比他大的数，比如 152432 的 3，
  // 如果比他小，就继续向左，直到跳出 while
  //  如果找到了，就互换位置
  if (i >= 0) {
    let j = nums.length - 1;
    while (j >= 0 && nums[j] <= nums[i]) {
      j--;
    }
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  console.log({ i, nums });
  // 此时 i 的右边，从右向左是一个递增序列，153422，
  // 为了使增幅更小，可以调整 422 的顺序，成为 153224
  let l = i + 1;
  let r = nums.length - 1;
  while (l < r) {
    [nums[l], nums[r]] = [nums[r], nums[l]];
    l++;
    r--;
  }
};

// const nums = [1, 2, 3];
const nums = [1, 5, 2, 4, 3, 2]; // 153224
console.log(nextPermutation(nums));
