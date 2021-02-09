/**
 * @param {number} n
 * @return {number}
 */
var tribonacci1 = function (n) {
  const memoization = {};
  for (let i = 0; i <= n; i++) {
    if (i === 0 || i === 1) {
      memoization[i] = i;
      continue;
    }
    if (i === 2) {
      memoization[i] = 1;
      continue;
    }
    memoization[i] = memoization[i - 3] + memoization[i - 2] + memoization[i - 1];
  }
  return memoization[n.toString()];
};

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci2 = function (n) {
  if (n <= 1) return n;
  if (n === 2) return 1;

  let pre = 0;
  let mid = 1;
  let lat = 1;
  let tribo = 0;

  while (n >= 3) {
    tribo = pre + mid + lat;
    pre = mid;
    mid = lat;
    lat = tribo;
    n -= 1;
  }

  return tribo;
};
