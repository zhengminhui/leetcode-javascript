/**
 * @param {number} target
 * @return {number[][]}
 */
// 既然要连续，则起始数应该在中间值的左边，最大的其实数不应该超过中数，如 15（7）
// 在内部再用第二个指针循环相加，相等时跳出，若小则继续，若大跳出，增加i
var findContinuousSequence = function (target) {
  const res = [];
  let i = 1;

  while (i < target / 2) {
    let sum = i;
    let j = i + 1;
    const seq = [i];

    while (j < target) {
      sum += j;
      seq.push(j);

      if (sum === target) {
        res.push(seq);
        break;
      } else if (sum > target) {
        break;
      } else if (sum < target) {
        j += 1;
      }
    }
    i += 1;
  }
  return res;
};
