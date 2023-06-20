/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  let res = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    const cur = columnTitle[i].charCodeAt() - 'A'.charCodeAt() + 1;
    res = res * 26 + cur;
  }
  return res;
};

const columnTitle = 'ZY';
console.log(titleToNumber(columnTitle));
