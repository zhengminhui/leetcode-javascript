/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
  const seq = [];
  let i = 1;

  while (i < (target / 2)) {
    let sum = i;
    let j = i + 1;
    const arr = [i];
    while (j < target) {
      sum += j;
      arr.push(j);
      if (sum > target) {
        break;
      } else if (sum === target) {
        seq.push(arr);
        break;
      }
      j++;
    }
    i += 1;
  }
  return seq;
};

const target = 1;
console.log(findContinuousSequence(target));
