/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  if (!points.length) return 0;
  let res = 0;
  points.sort((a, b) => a[1] - b[1]);

  let i = 0;
  // 还是按右端点排序，然后检查当前的左端点是否在标记的右端点左边，如果在，说明可以扎破。
  // 如果不在了，更新右端点。
  while (i < points.length) {
    const right = points[i][1];
    i++;
    while (i < points.length && points[i][0] <= right) {
      i++;
    }
    res++;
  }

  return res;
};
