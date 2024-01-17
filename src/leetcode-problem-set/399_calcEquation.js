/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
// https://leetcode.cn/problems/evaluate-division/solutions/548073/js-lin-jie-biao-dfs-by-yleave-l8p5/
var calcEquation = function (equations, values, queries) {
  const map = new Map();
  const visit = new Map();
  const res = [];

  const dfs = (src, dst) => {
    if (src === dst) {
      return 1.0;
    }

    const adjs = map.get(src);
    console.log(adjs);
    for (let i = 0; i < adjs.length; i++) {
      const next = adjs[i];
      if (!visit.get(next[0])) {
        visit.set(next[0], true);

        const ret = dfs(next[0], dst);

        visit.set(next[0], false);

        if (ret !== -1.0) {
          return next[1] * ret;
        }
      }
    }
    return -1.0;
  };

  for (let i = 0; i < equations.length; i++) {
    const e = equations[i];
    const v = values[i];

    if (!map.has(e[0])) {
      map.set(e[0], []);
      visit.set(e[0], false);
    }

    if (!map.has(e[1])) {
      map.set(e[1], []);
      visit.set(e[1], false);
    }

    const adj1 = map.get(e[0]);
    const adj2 = map.get(e[1]);
    adj1.push([e[1], v]);
    adj2.push([e[0], 1 / v]);
  }

  for (const q of queries) {
    const n0 = q[0];
    const n1 = q[1];
    if (map.has(n0) && map.has(n1)) {
      visit.set(n0, true);
      res.push(dfs(n0, n1));
      visit.set(n0, false);
    } else {
      res.push(-1.0);
    }
  }

  return res;
};

const equations = [
  ['a', 'b'],
  ['b', 'c'],
];
const values = [2.0, 3.0];
const queries = [
  ['a', 'c'],
  ['b', 'a'],
  ['a', 'e'],
  ['a', 'a'],
  ['x', 'x'],
];
console.log(calcEquation(equations, values, queries));
