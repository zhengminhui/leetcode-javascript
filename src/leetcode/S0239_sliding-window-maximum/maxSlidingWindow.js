/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 为了可以同时弹出队首和队尾的元素，使用双端队列；满足单调性的双端队列，称作单调队列。
 * deque 单调递减，记录当前窗口的最大值
 * deque[0] 头， deque[deque.length -1] 队尾
 */
var maxSlidingWindow = function (nums, k) {
  if (nums.length === 0 || k === 0) {
    return [];
  }
  const deque = [];
  // 未形成窗口
  for (let i = 0; i < k; i++) {
    while (deque.length && nums[i] >= nums[deque[deque.length - 1]]) {
      deque.pop();
    }
    deque.push(i);
  }
  // 形成窗口, 并记录了第一个窗口的最大值
  const ans = [nums[deque[0]]];

  for (let i = k; i < nums.length; i++) {
    while (deque.length && nums[i] >= nums[deque[deque.length - 1]]) {
      deque.pop();
    }
    deque.push(i);
    // 如果q当前队首记录的最大值 index，已经不在这个窗口内，要从头部移除
    while (deque[0] <= i - k) {
      deque.shift();
    }
    ans.push(nums[deque[0]]);
  }
  return ans;
};
