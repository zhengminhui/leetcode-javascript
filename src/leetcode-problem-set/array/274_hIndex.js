/**
 * @param {number[]} citations
 * @return {number}
 */
// 时间 O(nlogn) 先排序了。再 O(N) 遍历。
var hIndex = function (citations) {
  const len = citations.length;
  if (!len) return 0;

  // asc 排序
  citations.sort((a, b) => a - b);
  let h = len;

  for (let i = 0; i < len; i++) {
    // 如果当前引用值大于数量了，返回 h。
    if (citations[i] >= h) {
      return h;
    }
    // 如果不行，逐步减少 h 指数。
    h--;
  }
  return h;
};
