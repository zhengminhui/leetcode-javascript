import { MaxPriorityQueue } from '@datastructures-js/priority-queue';

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 使用优先队列，时间 O(n), hash建立 O(n), pq插入 O(log n)
var topKFrequent = function (nums, k) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    if (map.has(cur)) {
      const count = map.get(cur);
      map.set(cur, count + 1);
    } else {
      map.set(cur, 1);
    }
  }

  // 用 MaxPriorityQueue, 按频率 i[1] enqueue
  const pq = new MaxPriorityQueue({
    priority: (i) => i[1],
  });
  Array.from(map).forEach((i) => pq.enqueue(i));

  const res = [];
  for (let i = 0; i < k; i++) {
    // { priority: 3, element: [ 1, 3 ] }
    res.push(pq.dequeue().element[0]);
  }
  return res;
};
