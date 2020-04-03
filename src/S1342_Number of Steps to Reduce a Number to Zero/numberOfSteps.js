/**
 * @param {number} num
 * @return {number}
 */
// var numberOfSteps = function (num) {
//   let step = 0;
//   while (num !== 0) {
//     if (num % 2 === 1) {
//       num = num - 1;
//       step += 1;
//       if (num === 0) {
//         break;
//       }
//     }
//     num = num >> 1;
//     step += 1;
//   }
//   return step;
// };

// var numberOfSteps = function (num) {
//   let str = num.toString(2);
//   let step = 0;
//   for (let i = 0, n = str.length; i < n; i++) {
//     if (str[i] === '1') {
//       step += 2;
//     } else {
//       step += 1;
//     }

//   }
//   return step - 1;
// };

// 最后 -1 是因为leftmost 1 这个时候 1 步就到 0 了，所以需要回减 1
// 使用 bit and 比字符串更快
var numberOfSteps = function (num) {
  if (num === 0) return 0;

  let step = 0;
  while (num !== 0) {
    step += (num & 1) ? 2 : 1;
    num = num >> 1;
  }
  return step - 1;
};