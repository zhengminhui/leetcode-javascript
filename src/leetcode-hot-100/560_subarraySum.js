/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 前缀和
// 不关心具体哪几项和为 k，只关心等于 k 的前缀和 prefixSum 的出现次数
// 初始遍历前，让 -1 对应的前缀和为 0；前缀和为 0 出现 1 次。推导如下
// prefixSum[x]=nums[0]+nums[1]+…+nums[x]
// nums[x]=prefixSum[x]−prefixSum[x−1]
// nums 的 第 i 到 j 项 的和，有：
// nums[i]+…+nums[j]=prefixSum[j]−prefixSum[i−1]
// 当 i 为 0，此时 i-1 为 -1，我们故意让 prefixSum[-1] 为 0，使得通式在i=0时也成立：
// nums[0]+…+nums[j]=prefixSum[j]
var subarraySum = function (nums, k) {
  const map = { 0: 1 };
  let count = 0;
  let prefixSum = 0;

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];
    if (map[prefixSum - k]) {
      count += map[prefixSum - k];
    }

    if (map[prefixSum]) {
      map[prefixSum]++;
    } else {
      map[prefixSum] = 1;
    }
  }
  return count;
};
