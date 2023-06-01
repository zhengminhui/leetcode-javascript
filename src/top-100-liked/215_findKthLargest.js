import { MaxPriorityQueue } from '@datastructures-js/priority-queue';
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 用优先队列， time 数组遍历 O(n), 队列插入 O(logn), space O(n)
var findKthLargest = function (nums, k) {
  const pq = new MaxPriorityQueue({
    priority: (i) => i,
  });
  nums.forEach((i) => pq.enqueue(i));
  for (let i = 0; i < nums.length; i++) {
    const { element } = pq.dequeue();
    if (i === k - 1) {
      return element;
    }
  }
};

// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// var findKthLargest = function (nums, k) {
//   let heapSize = nums.length;
//   // build the max heap
//   const start = Math.floor(heapSize / 2) - 1;
//   for (let i = start; i >= 0; i--) {
//     maxHeapify(nums, i, heapSize);
//   }

//   // 进行下沉 大顶堆是最大元素下沉到末尾
//   for (let i = nums.length - 1; i >= nums.length - k + 1; i--) {
//     swap(nums, 0, i);
//     heapSize = heapSize - 1;
//     maxHeapify(nums, 0, heapSize);
//   }
//   return nums[0];
// };

// // 从左向右，自上而下的调整节点
// function maxHeapify(nums, i, heapSize) {
//   const l = i * 2 + 1;
//   const r = i * 2 + 2;
//   let largest = i;
//   if (l < heapSize && nums[l] > nums[largest]) {
//     largest = l;
//   }
//   if (r < heapSize && nums[r] > nums[largest]) {
//     largest = r;
//   }
//   if (largest !== i) {
//     swap(nums, i, largest);
//     maxHeapify(nums, largest, heapSize);
//   }
// }

// function swap(a, i, j) {
//   const temp = a[i];
//   a[i] = a[j];
//   a[j] = temp;
// }
