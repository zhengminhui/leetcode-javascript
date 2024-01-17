/**
 * @param {number[]} nums
 * @return {number}
 */
// 数组范围是 [1-n], 序数范围 0-n-1，唯一 1 个重复数，
// 转化为 求链表的环的入口。
// 数组的 index 作为 next 的指引。
// 比如，nums 数组：[4,3,1,2,2]
// 以 nums[0] 的值 4 作为索引，去到 nums[4]
// 以 nums[4] 的值 2 作为索引，去到 nums[2]
// 以 nums[2] 的值 1 作为索引，去到 nums[1]
// 最后 3 又指向 2，发现环的入口。
var findDuplicate = function (nums) {
  let slow = 0;
  let fast = 0;
  while (true) {
    // slow(0) 指向 [4]
    slow = nums[slow];
    // fast(0)指针当前指的数[4]，以该数为index，对应的数[2]，所谓走两步
    fast = nums[nums[fast]];
    console.log({ slow, fast });
    if (slow === fast) {
      fast = 0;
      while (true) {
        if (slow === fast) {
          return slow;
        }
        slow = nums[slow];
        fast = nums[fast];
      }
    }
  }
};

const nums = [4, 3, 1, 2, 2];
console.log(findDuplicate(nums));
