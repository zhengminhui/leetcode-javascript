/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
// 画图
// 先统计 task，找到最大任务数
// 再把其他的插入到最大任务之后执行。
// 为什么先找最大的，因为确定了 max 后，可以确定任务的行数。
// 相同种类的任务之间必须有长度为整数 n 的冷却时间
// 翻译一下就是，每批运行任务时间为 n+1，
// 比如 n=2 时，AB空，AB空...
// 或者 ABC,ABC,AB空，
// 所以前 max-1行 的时间就是 (max -1)*(n+1);
var leastInterval = function (tasks, n) {
  const arr = new Array(26).fill(0);
  for (const char of tasks) {
    arr[char.charCodeAt() - 'A'.charCodeAt()]++;
  }
  const max = Math.max(...arr);
  let ret = (max - 1) * (n + 1);

  // 处理剩下最后一行的任务。
  for (let i = 0; i < 26; i++) {
    if (arr[i] === max) {
      ret++;
    }
  }
  // 根据前面的分片处理，可以得到 ret。
  // 但是当 n 为 0 的时候，最少需要 task.length 才能跑完。
  // 所以取较大值。
  return Math.max(ret, tasks.length);
};
