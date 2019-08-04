/**
 * @param {number} n
 * @return {number}
 */
const tribonacci = function(n) {
  const memoization = {};
  for(let i = 0; i <= n; i++) {
      if (i === 0 || i === 1) { 
          memoization[i] = i;
          continue;
      } 
      if (i === 2) {
          memoization[i] = 1;
          continue;
      } 
      memoization[i] = memoization[i-3] + memoization[i-2] + memoization[i-1];
  }
  return memoization[n.toString()];
};
