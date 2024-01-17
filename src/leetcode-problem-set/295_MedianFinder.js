import {
  MaxPriorityQueue,
  MinPriorityQueue,
} from '@datastructures-js/priority-queue';

var MedianFinder = function () {
  this.large = new MaxPriorityQueue({
    priority: (i) => i,
  });
  this.small = new MinPriorityQueue({
    priority: (i) => i,
  });
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  const { small, large } = this;
  if (small.size() >= large.size()) {
    small.enqueue(num);
    large.enqueue(small.dequeue().element);
  } else {
    large.enqueue(num);
    small.enqueue(large.dequeue().element);
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  const { small, large } = this;

  // 如果元素不一样多，多的那个堆的堆顶元素就是中位数
  if (large.size() < small.size()) {
    return small.front().element;
  } else if (large.size() > small.size()) {
    return large.front().element;
  }
  // 如果元素一样多，两个堆堆顶元素的平均数是中位数
  return (large.front().element + small.front().element) / 2.0;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
