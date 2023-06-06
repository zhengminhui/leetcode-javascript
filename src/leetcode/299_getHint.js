/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
// Time O(n) Space O(10)
var getHint = function (secret, guess) {
  let a = 0;
  let b = 0;
  const sArr = new Array(10).fill(0);
  const gArr = new Array(10).fill(0);

  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      a += 1;
    } else {
      // 分别统计当前字符，存到数组里，出现一次，则加 1 次。
      sArr[parseInt(secret[i], 10)] += 1;
      gArr[parseInt(guess[i], 10)] += 1;
    }
  }
  console.log(sArr, gArr);
  // 再遍历数组，取交集。
  // s [0, 1, 1, 1, 0, 0, 0, 0, 0, 0]
  // g [1, 2, 0, 0, 0, 0, 0, 0, 0, 0]
  for (let i = 0; i < 10; i++) {
    b += Math.min(sArr[i], gArr[i]);
  }

  return `${a}A${b}B`;
};

// /**
//  * @param {string} secret
//  * @param {string} guess
//  * @return {string}
//  */
// // 我的方法，不好。没必要保存全部字符串，用固定空间就可以嘞。
// // Time O(n), Space O(n)
// var getHint = function (secret, guess) {
//   const sArr = Array.from(secret);
//   const gArr = Array.from(guess);
//   let a = 0;
//   let b = 0;
//   // 先计算相同的，然后挖去。
//   for (let i = 0; i < sArr.length; i++) {
//     if (sArr[i] === gArr[i]) {
//       a += 1;
//       sArr.splice(i, 1);
//       gArr.splice(i, 1);
//       i -= 1;
//     }
//   }
//   // 根据还存在的 secrets， 生成一个 map
//   const sMap = new Map();
//   sArr.forEach((c) => {
//     if (sMap.has(c)) {
//       sMap.set(c, sMap.get(c) + 1);
//     } else {
//       sMap.set(c, 1);
//     }
//   });
//   // 再根据 map，计算不同的。
//   for (let i = 0; i < sArr.length; i++) {
//     // 1123, 0111, 因为是 hashmap，所以 key 还存在，所以要判断 value 是否大于 0，表示还未使用。
//     if (sMap.has(gArr[i]) && sMap.get(gArr[i]) > 0) {
//       sMap.set(gArr[i], sMap.get(gArr[i]) - 1);
//       b += 1;
//     }
//   }
//   return `${a}A${b}B`;
// };
