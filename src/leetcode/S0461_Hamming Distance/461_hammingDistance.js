/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 * use xor is the best solution. xor will get a new binary number 0101^1100 -> 1001. 
 * Then remove the 0s will get how many 1s which is the hamming distance.
 */
var hammingDistance = function (x, y) {
  return (x ^ y).toString(2).replace(/0/g, '').length;
}

// var hammingDistance = function(x, y) {
//     var binaryX = x.toString(2),
//         binaryY = y.toString(2),
//         res = 0,
//         carryX,
//         carryY;
//     var arr = leftPadZeros(binaryX, binaryY)
//         str1 = arr[0],
//         str2 = arr[1],
//         len = str1.length - 1;
//     while (len >= 0) {
//         carryX = str1[len] - '0';
//         carryY = str2[len] - '0';
//         if (carryX !== carryY) {
//             res++;
//         }
//         len--;
//     }
//     return res;
// };
//
// var leftPadZeros = function(x, y) {
//   var lenX = x.length,
//       lenY = y.length;
//   var sm = lenX > lenY ? y : x,
//       lg = lenX > lenY ? x : y;
//   var diff = lg.length - sm.length;
//   while (diff > 0) {
//     sm = '0' + sm;
//     diff--;
//   }
//   y = sm;
//   x = lg;
//   return [x, y];
// }

console.log(hammingDistance(1, 4))
