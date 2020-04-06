/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function (rating) {
  if (rating.length < 3) return 0;

  let res = 0;
  const len = rating.length;
  const greaterThan = new Array(len).fill(0);
  const lessThan = new Array(len).fill(0);

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (rating[i] < rating[j]) {
        greaterThan[i] += 1;
      } else {
        lessThan[i] += 1;
      }
    }
  }

  for (let i = 0; i < len - 2; i++) {
    for (let j = i + 1; j < len; j++) {
      // 判断是升序，则看 j 后面还有多少个比 j 更大的
      if (rating[i] < rating[j]) {
        res += greaterThan[j];
      } else if (rating[i] > rating[j]) {
        // 判断是降序，则看后面有多少比 j 更小的
        res += lessThan[j];
      }
    }
  }
  return res;
};

// numTeams([2,5,3,4,1])
numTeams([4, 7, 9, 5, 10, 8, 2, 1, 6]);
