/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
//  注意两点，1 个元素可能 wei0，不能单纯 true false 判断。
// 2 是while 循环走完，i 要回退一格，因为它在跳出条件之前多走了一格。
var chunk = function (arr, size) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    let p = 0;
    const chunk = [];
    while (p < size) {
      // arr[i] 可能是 0
      if (arr[i] !== undefined) {
        chunk.push(arr[i]);
      }
      p++;
      i++;
    }
    i--;
    res.push(chunk);
  }
  return res;
};
