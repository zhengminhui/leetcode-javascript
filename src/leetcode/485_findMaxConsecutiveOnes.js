/**
 * @param {number[]} nums
 * @return {number}
 * no need to care about the consecutive number,
 * just accumulate when num[i] is 1
 * and campare max and curMax when hit 0
 * finally need to return this compare again since 1 maybe the last number
 */
var findMaxConsecutiveOnes = function(nums) {
  var maxSum = 0;
  var curSum = 0;
  if (1 === nums.length) {
    return nums[0];
  }
  for (var i = 0; i < nums.length; i++) {
    if (1 === nums[i]) {
      curSum = curSum + nums[i];
    } else {
      maxSum = maxSum > curSum ? maxSum : curSum;
      curSum = 0;
    }
  }
  return maxSum > curSum ? maxSum : curSum;
};

// var findMaxConsecutiveOnes = function(nums) {
//   var index = 0,
//     consec = 0,
//     res = 0;
//   if (nums.length === 1) {
//     return nums[0];
//   }
//   while (index < nums.length) {
//     if (nums[index] === 1) {
//       consec = consec === 0 ? 1 : consec;
//       if (nums[index + 1] === 1) {
//         consec++;
//       } else {
//         consec = 1;
//       }
//     } else {
//       consec = 0;
//     }
//     res = consec > res ? consec : res;
//     index++;
//   }
//   console.log(res);
//   return res;
// };
