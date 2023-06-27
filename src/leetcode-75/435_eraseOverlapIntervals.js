/**
 * @param {number[][]} intervals
 * @return {number}
 */
// 按右端点排序，例子 [[1,100],[11,22],[1,11],[2,12]]
// 排序后是[[1, 11], [2, 12], [11, 22], [1, 100]]
// 当第一个右端点巨大时，要删掉很多区间，不满足找最小值。
var eraseOverlapIntervals = function (intervals) {
  if (!intervals.length) return 0;
  let ans = 1;
  intervals.sort((a, b) => a[1] - b[1]);

  let right = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    const cur = intervals[i];
    // 如果当前的左端点比标记的右端点大，说明 ok。然后更新右端点。
    // 如果不大，就可以挖去。如[2,12]
    if (cur[0] >= right) {
      ans++;
      right = cur[1];
    }
  }

  return intervals.length - ans;
};
