/**
 * https://leetcode.com/problems/word-pattern/
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 * 1. check if the words array and pt array have the same length
 * 2. check for the same key, if their values are equal
 * 3. check if there is a value maps to multi key
 */
var wordPattern = function(pattern, str) {
  var words = str.split(' '),
    pt = pattern.split('');
  if (words.length !== pt.length) return false;
  var wordMap = new Map();
  for (var i = 0; i < pt.length; i++) {
    var key = pt[i],
      val = words[i];
    if (wordMap.has(key)) {
      if (wordMap.get(key) !== val) {
        return false;
      }
    } else {
      if (containsValue(wordMap, val)) {
        return false;
      }
      wordMap.set(key, val);
    }
  }
  return true;
};

var containsValue = function(map, val) {
  var values = [];
  for (var value of map.values()) {
    values.push(value);
  }
  return values.includes(val);
};

// console.log(wordPattern('jquery', 'jquery'));
console.log(wordPattern('aaa', 'aa aa aa aa'));
