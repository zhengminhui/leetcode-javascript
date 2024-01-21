/**
 * @param {number} columnNumber
 * @return {string}
 */
// 注意 Z 的处理。因为 A 在这里是 1，而不是 0，所以要给数字减 1，保持对齐。
// "A".charCodeAt() = 65, "Z".charCodeAt() = 90;
var convertToTitle = function (columnNumber) {
  let res = '';
  while (columnNumber) {
    columnNumber -= 1;
    const char = String.fromCharCode((columnNumber % 26) + 65);
    res = char + res;
    columnNumber = Math.floor(columnNumber / 26);
  }
  return res;
};
