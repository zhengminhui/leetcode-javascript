/**
 * @param {number[]} citations
 * @return {number}
 */
// 已经拍过序了，所以二分搜索，时间 O(logn)
// 找的是满足的引用数。
var hIndex = function (citations) {
  if (!citations.length) return 0;

  const len = citations.length;
  let i = 0;
  let j = len - 1;
  while (i < j) {
    const mid = (i + j) >> 1;
    // mid对应的引用数量 大于 论文数量，抛弃右边，因为右边引用值更高，就不用检查了。
    if (citations[mid] >= len - mid) {
      j = mid;
    } else {
      // mid 对应的引用1， 论文数量 5-1 = 4,不足，所以要增大引用数。向右看，左边不要了。
      i = mid + 1;
    }
  }
  // 注意 [0] 的情况。没有被引用的论文。
  return citations[j] >= len - j ? len - j : 0;
};
