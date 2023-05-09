/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// 按左端点排序，然后依次比对，如果后面的左端点，小于前面的右端点，则可以合并。
// 否则，push 前段，并更新之，重复此动作。
var merge = function (intervals) {
  // 先按子interval的左端点排序。
  intervals.sort((a, b) => a[0] - b[0]);

  const res = [];
  let pre = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    const cur = intervals[i];
    if (cur[0] <= pre[1]) {
      // 如果当前的左边界，小于前一组的右边界，说明左端落在前一组中。可以合并
      // 在pre上in-place 修改，以便继续向后合并。
      // 右端点，在前后的右端点中选择较大的。
      pre[1] = Math.max(pre[1], cur[1]);
    } else {
      // 不满足合并条件是，push 前段，重新赋值，把当前的赋为新的前段。
      res.push(pre);
      pre = cur;
    }
  }
  // 无论是满足，还是不满足的条件下，最后一个pre都没有被push进去，所以需要最后手动处理一下。
  res.push(pre);
  return res;
};
