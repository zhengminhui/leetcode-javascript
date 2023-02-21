/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  // 先把原数组根据，1 身高从高到矮，高的在前面，大的在前面
  // 2前面的人数，从少到多，排一遍
  people.sort((a, b) => b[0] - a[0] || a[1] - b[1]);

  const res = [];

  for (let i = 0; i < people.length; i++) {
    const cur = people[i];
    const index = cur[1];
    // 把people 中的人，按index 插入，这里的点是
    // 矮个的插在高个的前面，并不会影响高个的顺序。
    // 比如，[7,0]本来在第一位，把[5,0] 插在前面后，依然合理成立。
    res.splice(index, 0, cur);
  }

  return res;
};
