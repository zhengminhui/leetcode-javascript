/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  let skipS = 0;
  let skipT = 0;
  let i = s.length - 1;
  let j = t.length - 1;

  // 循环s，t
  while (i >= 0 || j >= 0) {
    while (i >= 0) {
      // 遇到 #，增加 skip count
      if (s[i] === '#') {
        skipS += 1;
        i--;
      } else if (skipS > 0) {
        // skip大于 0，说明前面有 n 个 #，这个时候遇到的 char 要跳过。
        skipS--;
        i--;
      } else {
        // 当既不是#，也没有 skip 时，是个合法的字符串，这时候 break ，来比较是否相等。
        break;
      }
    }
    while (j >= 0) {
      if (t[j] === '#') {
        skipT += 1;
        j--;
      } else if (skipT > 0) {
        skipT--;
        j--;
      } else {
        break;
      }
    }
    if (s[i] !== t[j]) return false;
    i--;
    j--;
  }
  return true;
};

const s = 'ab#c';
const t = 'ad#c';
console.log(backspaceCompare(s, t));

// // use stack, T O(n) S O(n)
// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
// var backspaceCompare2 = function (s, t) {
//   return stackParse(s) === stackParse(t);
// };

// function stackParse(str) {
//   const arr = [];
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== '#') {
//       arr.push(str[i]);
//     } else {
//       arr.pop();
//     }
//   }
//   return arr.join('');
// }
