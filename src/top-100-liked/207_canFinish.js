/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  // 构建入度数组和邻接表
  const inDegree = new Array(numCourses).fill(0);
  const p = prerequisites.slice(); // 方便阅读，换个短名字
  const map = {};
  for (let i = 0; i < p.length; i++) {
    // p[i][0] 是当前课
    // p[i][1] 是先修课
    inDegree[p[i][0]]++;
    if (map[p[i][1]]) {
      map[p[i][1]].push(p[i][0]);
    } else {
      map[p[i][1]] = [p[i][0]];
    }
  }

  const q = [];
  for (let i = 0; i < inDegree.length; i++) {
    // 所有入度 0 的课程入列
    if (inDegree[i] === 0) q.push(i);
  }
  let count = 0;
  while (q.length) {
    // 当前选的课
    const selected = q.shift();
    count++;
    // 这门课的后续课
    const toEnQ = map[selected];
    if (toEnQ && toEnQ.length) {
      for (let i = 0; i < toEnQ.length; i++) {
        inDegree[toEnQ[i]]--;
        if (inDegree[toEnQ[i]] === 0) {
          q.push(toEnQ[i]);
        }
      }
    }
  }
  return count === numCourses;
};
