/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  var len = s.length;
  var cutLength = 2 * k;
  var newStr = '';
  for (var i = 0; i < len; i = i + k) {
    var remainLength = len - i;
    if (remainLength > cutLength) {
      // cut a slice, reverse head, keep tail, append to newStr
      var cut = s.slice(i, i + 2 * k);
      var head = helperRevers(cut.slice(0, k));
      var tail = s.slice(k, 2 * k);
      newStr += head + tail;
    }
  }
};

var helperReverse = function(s) {
  return s
    .split('')
    .reverse()
    .join('');
};
