/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
// h 最小是 pile.length， 最快的情况是，一小时 1 堆，k 就是 max(pile[i])
// 一小时内不能跨堆吃。可以推导出，最大值也就是 pile[i]， 再大也没用。
// 每个小时都要吃。 所以，不能一下都吃完，要找到尽量的最小值。
var minEatingSpeed = function (piles, h) {
  let right = Math.max(...piles);
  let left = 0;
  while (left < right) {
    const mid = left + ((right - left) >> 2);
    // 如果算出来时间比 h 小，说明吃的太快了。需要慢点，所以把右端点向中间收敛。
    if (getTime(piles, mid) <= h) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return right;
};

function getTime(piles, v) {
  let time = 0;
  for (const p of piles) {
    time += Math.ceil(p / v);
  }
  return time;
}
