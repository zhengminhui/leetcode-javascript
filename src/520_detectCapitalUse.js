/**
 * @param {string} word
 * @return {boolean}
 * 1. full upper; 2. full lower; 3. First Char is Upper, follow with all lower case
 */
var detectCapitalUse = function (word) {
  return word === word.toUpperCase() ||
    word === word.toLowerCase() ||
    word[0] === word[0].toUpperCase() && word.slice(1, word.length) === word.slice(1, word.length).toLowerCase();
};

// var detectCapitalUse = function (word) {
//   var firstCharCode = word.charCodeAt(0);
//   var secondCharCode = word.charCodeAt(1);
//   // all uppercase
//   if (firstCharCode <= 90 && secondCharCode <= 90) {
//     var str = word.slice(2, word.length);
//     return iterationHelper(str, 65, 90);
//   }
//   // first uppercase
//   if (firstCharCode <= 90 && secondCharCode >= 97) {
//     var str = word.slice(2, word.length);
//     return iterationHelper(str, 97, 122);
//   }
//   // all lowercase
//   if (firstCharCode >= 97) {
//     var str = word.slice(1, word.length);
//     return iterationHelper(str, 97, 122);
//   }
//   // for just one char
//   return true;
// };

// var iterationHelper = function (str, low, high) {
//   for (var i = 0; i < str.length; i++) {
//     if (str[i].charCodeAt(0) < low || str[i].charCodeAt(0) > high) {
//       return false;
//     }
//   }
//   return true;
// }
