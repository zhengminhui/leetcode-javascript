/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
  let max = S.length;
  let min = 0;
  let res = [];
  for (let i = 0; i < S.length; i++) {
    let curr;
    if (S[i] === 'I') {
      curr = min;
      min += 1;
    }
    if (S[i] === 'D') {
      curr = max;
      max -= 1;
    }
    res.push(curr);
    if (i === S.length - 1) {
      let last = S[i] === 'I' ? curr + 1 : curr - 1;
      res.push(last);
    }
  }
  return res;
};
