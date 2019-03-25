/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  let i = 0;
  let res = '';

  if (!str.length) return str;

  while (i < str.length) {
    let newChar = '';

    const charCode = str[i].charCodeAt();
    if (charCode >= 65 && charCode <= 90) {
      newChar = String.fromCharCode(charCode + 32);
    }
    res += newChar.length ? newChar : str[i];
    i++;
  }
  return res;
};
