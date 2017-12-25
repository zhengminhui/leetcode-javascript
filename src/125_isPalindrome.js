/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // s = s.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "")
  // var ns = s.split("").reverse().join("")
  // return s === ns

  // \/W\ match any char that not alphanumeric 
  var s = s.replace(/\W/g, '').toLowerCase();
  var head = 0;
  var tail = s.length - 1;
  while (head < tail) {
    if (s[head] !== s[tail]) {
      return false;
    }
    head++;
    tail--;
  }
  return true;
};
