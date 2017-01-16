/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    var arr = [];
    while (n >= 1) {
        if(n % 3 === 0) {
            if( n % 5 === 0) {
                arr.unshift('FizzBuzz');
            } else {
                arr.unshift('Fizz');
            }
        } else if (n % 5 === 0 ) {
            arr.unshift('Buzz');
        } else {
            arr.unshift(n.toString());
        }
        n--;
    }
    return arr;
};
