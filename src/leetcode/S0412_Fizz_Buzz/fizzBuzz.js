/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  const res = [];
  for (var i = 1; i <= n; i++) {
    let str;
    if (i % 3 === 0) {
      if (i % 5 === 0) {
        str = 'FizzBuzz';
      } else {
        str = 'Fizz';
      }
    } else if (i % 5 === 0) {
      str = 'Buzz';
    } else {
      str = i.toString();
    }
    res.push(str);
  }
  return res;
};
