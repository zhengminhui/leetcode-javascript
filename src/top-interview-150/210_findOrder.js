/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  // graph 相关的先构建入度数组和邻接表
  const inDegree = new Array(numCourses).fill(0);
  const graph = {};

  // p[i][0] 是当前课
  // p[i][1] 是先导课
  for (let i = 0; i < prerequisites.length; i++) {
    // 入度数组
    inDegree[prerequisites[i][0]]++;
    // 邻接表
    if (graph[prerequisites[i][1]]) {
      graph[prerequisites[i][1]].push(prerequisites[i][0]);
    } else {
      const list = [];
      list.push(prerequisites[i][0]);
      graph[prerequisites[i][1]] = list;
    }
  }

  const res = [];
  const queue = [];
  // 存放入度 0 的课程
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }
  while (queue.length) {
    const cur = queue.shift();
    res.push(cur);
    const toEnQueue = graph[cur];
    // 查看后续课程，将后续课程入度-1，到 0 时就让该课入列。
    if (toEnQueue && toEnQueue.length) {
      for (let i = 0; i < toEnQueue.length; i++) {
        inDegree[toEnQueue[i]]--;
        if (inDegree[toEnQueue[i]] === 0) {
          queue.push(toEnQueue[i]);
        }
      }
    }
  }
  return res.length === numCourses ? res : [];
};
