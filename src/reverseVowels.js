/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  if (s.length < 1) return s;
  // two pointers, previous, latter
  var p = 0,
    l = s.length - 1,
    tmp;
  var ss = s.split('');
  var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  while (p < l) {
    if (vowels.includes(ss[p])) {
      if (vowels.includes(ss[l])) {
        //switch
        tmp = ss[p];
        ss[p] = ss[l];
        ss[l] = tmp;
        p++;
        l--;
      } else {
        l--;
      }
    } else {
      p++;
    }
  }
  return ss.join('');

};
