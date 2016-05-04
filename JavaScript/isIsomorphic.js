/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 'abba' 'abab'
 * 'ab' 'aa'
 * save s char and t char as key-value pair, if key exist, check if the values match; Also need to be careful when put new pair, if the value already exist, it shoud return false;
 */
var isIsomorphic = function(s, t) {
  if (s.length === 0 && t.length === 0) return true;
  var charMap = new Map(),
    key,
    value;

  for (var i = 0; i < s.length; i++) {
    key = s[i];
    value = t[i];
    if (charMap.has(key)) {
      if (value !== charMap.get(key)) {
        return false;
      }
    } else {
      //if the value already exists
      if (containsValue(charMap, value)) {
        return false;
      } else {
        charMap.set(key, value);
      }
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
